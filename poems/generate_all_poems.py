import os
from html import unescape
from typing import Optional

import attr
import chevron
import markdown

@attr.s
class Poem(object):
    title: Optional[str] = attr.ib(default=None)
    content: Optional[str] = attr.ib(default=None)
    file_name: Optional[str] = attr.ib(default=None)
        

if __name__ == '__main__':
    poems = []
    for poem_markdown_file in os.listdir('markdown'):
        file_path = os.path.join(f'markdown/{poem_markdown_file}')
        file_name, _ = os.path.splitext(poem_markdown_file)
        poem = Poem()
        with open(file_path, 'r', encoding='utf-8') as poem_file:
            poem.title = poem_file.readline().strip().replace("# ", "")
            poem.content = markdown.markdown(poem_file.read(), extension=['nl2br'])
            poem.file_name = file_name
            poems.append(poem)
        with open('poem.mustache', 'r', encoding='utf-8') as poem_template, open(f'{file_name}.html', 'w', encoding='utf-8') as html_file:
            html_file.write(chevron.render(poem_template, {'title': poem.title, 'content': poem.content}))
    titles = [{'title': poem.title, 'link': f'{poem.file_name}.html'} for poem in poems]
    with open('list.mustache', 'r') as list_template, open('index.html', 'w') as index_html:
        index_html.write(chevron.render(list_template, {'poems': titles}))

