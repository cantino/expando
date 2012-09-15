#!/usr/bin/env ruby

# Translate a page using jquery.expando from the modern <expando></expando> style to the IE8-supporting <span class='expando'></span> style.

text = File.read(File.dirname(__FILE__) + (ARGV.first || "/index-dev.html"))
text.gsub!(/<(expando|initial|expanded)/i, '<span class="\1"')
text.gsub!(/<\/(expando|initial|expanded)/i, '</span')
text.gsub!(/\("(expando|initial|expanded)"\)/i, '(".\1")')
text.gsub!(/\('(expando|initial|expanded)'\)/i, '(".\1")')

File.open(File.dirname(__FILE__) + (ARGV[1] || "/index.html"), "w") do |file|
  file.print text
end
