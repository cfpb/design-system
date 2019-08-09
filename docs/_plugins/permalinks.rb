module Jekyll
  class Page
    def url=(name)
      @url = name
    end
  end
end

module Permalinks
  class Generator < Jekyll::Generator
    def generate(site)
      site.pages.each do |page|
        # Slugify the title
        slug = page.data['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        # Look out for the homepage and section index pages
        if not page.data['section'] or slug == page.data['section']
          slug = 'index'
        end
        page.url = "#{page.data['section']}/#{slug}"
      end
    end
  end
end
