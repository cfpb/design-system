require 'nokogiri'

# Inlines SVGs by replacing all instances of {% includes icons/XXXXXXX.svg %}
# with the SVG pulled from _includes/icons/XXXXXX.svg
Jekyll::Hooks.register :pages, :post_render do |page|
    include_tag_regex = /{%\s+include\s+\/?icons\/(?<icon>[\w-]+)\.svg\s+%}/
    doc = Nokogiri::HTML(page.output)
    divs = doc.css('div.live-code-example, table.icon-table')
    divs.each do |div|
      # Don't touch code in the non-rendered source code examples
      # next if div.attr('class') == "source-code"
      div.inner_html = div.inner_html.gsub(include_tag_regex) do |inline_icon|
        filename = "#{$1}.svg"
        filepath = File.join(File.dirname(__FILE__), '../_includes/icons/', filename)
        svg = File.read(filepath)
        inline_icon = svg
      end
    end
    page.output = doc.to_html
end
