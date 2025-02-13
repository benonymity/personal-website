import os
import xml.etree.ElementTree as ET
from datetime import datetime

def generate_sitemap():
    # Path to the sitemap.xml file
    sitemap_path = '../sitemap.xml'
    
    # Create the root element
    urlset = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    # Base URL for the website
    base_url = 'https://benbassett.dev/'
    
    # Pages to include (based on HTML files in assets/pages)
    pages = [
        'cv/', 
        'books/', 
        'quotes/',
        'contact/',
        'portfolio/',
        'about/',
        'links/',
        '404/'
    ]
    
    # Add homepage
    homepage_url = ET.SubElement(urlset, 'url')
    ET.SubElement(homepage_url, 'loc').text = base_url
    ET.SubElement(homepage_url, 'lastmod').text = datetime.now().strftime('%Y-%m-%d')
    ET.SubElement(homepage_url, 'changefreq').text = 'daily'
    ET.SubElement(homepage_url, 'priority').text = '1.0'
    
    # Add other pages
    for page in pages:
        page_url = ET.SubElement(urlset, 'url')
        
        # Construct full URL
        full_url = base_url + page.replace('.html', '')
        ET.SubElement(page_url, 'loc').text = full_url
        
        # Get last modified date from file
        file_path = f'../assets/pages/{page}'
        if os.path.exists(file_path):
            mod_time = datetime.fromtimestamp(os.path.getmtime(file_path))
            ET.SubElement(page_url, 'lastmod').text = mod_time.strftime('%Y-%m-%d')
        
        # Set change frequency and priority
        ET.SubElement(page_url, 'changefreq').text = 'weekly'
        ET.SubElement(page_url, 'priority').text = '0.8'
    
    # Create ElementTree and write to file
    tree = ET.ElementTree(urlset)
    tree.write(sitemap_path, encoding='utf-8', xml_declaration=True)
    print(f"Sitemap generated at {sitemap_path}")

if __name__ == "__main__":
    generate_sitemap()
