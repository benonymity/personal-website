import os
import xml.etree.ElementTree as ET

def add_quote():
    # Path to the quotes HTML file
    quotes_file_path = '../assets/pages/quotes.html'
    
    # Parse the existing XML
    tree = ET.parse(quotes_file_path)
    root = tree.getroot()
    
    # Find the quotes list
    quotes_list = root.find(".//ul[@class='quotes-items']")
    
    while True:
        # Prompt for quote text
        quote_text = input("Enter quote text (or 'done' to finish): ")
        if quote_text.lower() == 'done':
            break
        
        # Prompt for citation
        citation = input("Enter quote citation: ")
        
        # Create new quote list item
        new_quote_item = ET.fromstring(f'''
        <li class="quotes-item">
            <div class="content-card">
                <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                <blockquote>
                    <p>{quote_text}</p>
                </blockquote>
                <cite>{citation}</cite>
            </div>
        </li>
        ''')
        
        # Append new quote to the list
        quotes_list.append(new_quote_item)
        
        # Write changes back to file
        tree.write(quotes_file_path, encoding='utf-8', xml_declaration=True)
        print(f"Quote added: {quote_text}")
    
    print("Finished adding quotes.")

if __name__ == "__main__":
    add_quote()

