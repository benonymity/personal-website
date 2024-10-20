import os
import re
import yaml
import warnings
import subprocess
from bs4 import BeautifulSoup
from collections import OrderedDict

def load_yaml(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return yaml.safe_load(file)

def update_html(html_file, cv_data):
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    sections = cv_data['cv']['sections']
    sections.pop('interests')
    sections.pop('projects')
    for section_id, items in sections.items():
        update_section(soup, section_id, items)

    return soup

def update_section(soup, section_id, items):
    timeline_list = soup.find('ol', id=section_id)
    if timeline_list:
        timeline_list.clear()
        for item in items:
            try:
                li = soup.new_tag('li', **{'class': 'timeline-item', 'data-category': item.get('type', '')})
                
                h4 = soup.new_tag('h4', **{'class': 'h4 timeline-item-title'})
                if isinstance(item, dict):
                    title_text = item.get('position', '') or item.get('title', '') or item.get('label', '') or item.get('institution', '') or ''
                    if 'company' in item:
                        title_text = f'{title_text} — {item.get("company")}'
                else:
                    title_text = ''
                
                h4 = create_link_if_needed(soup, h4, title_text)
                li.append(h4)
                
                span = soup.new_tag('span')
                if isinstance(item, dict):
                    span.string = str(item.get('date', ''))
                else:
                    span.string = ''
                li.append(span)
                
                p = soup.new_tag('p', **{'class': 'timeline-text'})
                if isinstance(item, dict):
                    details_text = str(item.get('summary', '') or item.get('details', '') or '')
                else:
                    details_text = str(item)
                p = create_link_if_needed(soup, p, details_text)
                li.append(p)
                
                timeline_list.append(li)
            except AttributeError as e:
                print(f"Error processing item: {item}. Error: {e}")
    else:
        print(f"Timeline list with id '{section_id}' not found")

def create_link_if_needed(soup, tag, text):
    link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    matches = re.findall(link_pattern, text)
    
    if matches:
        for match in matches:
            link_text, link_url = match
            a_tag = soup.new_tag('a', href=link_url)
            a_tag.string = link_text
            link_placeholder = f'[{link_text}]({link_url})'
            text = text.replace(link_placeholder, str(a_tag))
    
    tag.clear()
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        tag.append(BeautifulSoup(text, 'html.parser', from_encoding='utf-8'))
    return tag

def generate_yaml_by_type(cv_data):
    types = set()
    for section_name, section_data in cv_data['cv']['sections'].items():
        for item in section_data:
            if 'type' in item:
                types.add(item['type'])

    for type_name in types:
        if type_name == 'all':
            continue
        filtered_data = {'cv': {}}
        
        for key, value in cv_data['cv'].items():
            if key != 'sections':
                filtered_data['cv'][key] = value

        filtered_data['cv']['sections'] = {}
        for section_name, section_data in cv_data['cv']['sections'].items():
            filtered_section = [item for item in section_data if isinstance(item, dict) and (item.get('type') == type_name or item.get('type') == 'all')]
            if filtered_section:
                filtered_data['cv']['sections'][section_name] = filtered_section

        if 'design' in cv_data:
            filtered_data['design'] = cv_data['design']

        yaml_file = f'{type_name}.yaml'
        with open(yaml_file, 'w', encoding='utf-8') as file:
            yaml.dump(filtered_data, file, default_flow_style=False, sort_keys=False)
        
        generate_pdf(yaml_file, f'../assets/files/Benjamin Bassett {type_name.capitalize()} CV.pdf')
        os.remove(yaml_file)
    generate_pdf('cv.yaml', f'../assets/files/Benjamin Bassett CV.pdf')

def dict_representer(dumper, data):
    return dumper.represent_dict(data.items())

yaml.add_representer(OrderedDict, dict_representer)
yaml.add_representer(dict, dict_representer)
def update_cv(yaml_file, html_file):
    cv_data = load_yaml(yaml_file)
    updated_soup = update_html(html_file, cv_data)

    with open(html_file, 'w', encoding='utf-8') as file:
        file.write(str(updated_soup))

    run_prettier(html_file)

    generate_yaml_by_type(cv_data)

def generate_pdf(yaml_file, output_pdf):
    try:
        subprocess.run(
            ["rendercv", "render", yaml_file, "--pdf-path", output_pdf],
            check=True,
            capture_output=True,
            text=True,
        )
        print(f"CV PDF generated successfully: {output_pdf}")
    except subprocess.CalledProcessError as e:
        print(f"Error generating CV PDF: {e}")
        print(f"rendercv output: {e.output}")

def run_prettier(file_path):
    try:
        subprocess.run(["npx", "prettier", "--write", file_path], check=True, capture_output=True, text=True)
        print(f"Prettier formatting applied to {file_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error running Prettier: {e}")
        print(f"Prettier output: {e.output}")

if __name__ == "__main__":
    yaml_file = 'cv.yaml'
    html_file = '../assets/pages/cv.html'
    update_cv(yaml_file, html_file)
    print("CV updated successfully.")
