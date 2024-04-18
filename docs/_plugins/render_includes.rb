require 'nokogiri'

# Inlines SVGs by replacing all instances of {% include icons/XXXXXXX.svg %}
# with the SVG pulled from _includes/icons/XXXXXX.svg
Jekyll::Hooks.register :pages, :post_render do |page|
    include_tag_regex = /{%\s+include\s+\/?icons\/(?<icon>[\w-]+)\.svg\s+%}/
    doc = Nokogiri::HTML(page.output)
    # Elements to search for includes in
    divs = doc.css(
      'div.a-live__code,' \
      'table.icon-table,' \
      'body,' \
      'div.component-restrictions,' \
      'section#description,' \
      '.m-variation__description,' \
      '.misuse'
    )
    divs.each do |div|
      div.inner_html = div.inner_html.gsub(include_tag_regex) do |inline_icon|
        filename = "#{$1}.svg"
        filepath = File.join(File.dirname(__FILE__), '../_includes/icons/', filename)
        svg = File.read(filepath)
        inline_icon = svg
      end
    end
    page.output = doc.to_html
end
