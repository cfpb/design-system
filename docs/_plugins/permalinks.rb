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
        if page.data['title']
          slug = page.data['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        end
        # Look out for the homepage and section index pages
        if page.data['is_homepage'] or page.data['section'] == slug
          slug = 'index'
        end
        page.url = "#{page.data['section']}/#{slug}"
      end
    end
  end
end
