class Buddy < ActiveRecord::Base
  def to_s
    "#{nick}"
  end
end
