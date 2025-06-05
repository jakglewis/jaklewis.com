source "https://rubygems.org"

ruby "2.7.2"

gem "jekyll", "~> 4.2.0"
gem "webrick", "~> 1.7"
gem "ffi", ">= 1.15.0"

group :jekyll_plugins do
  gem "jekyll-relative-links"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]