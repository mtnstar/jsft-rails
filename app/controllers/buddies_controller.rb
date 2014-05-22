class BuddiesController < CrudController
  self.permitted_attrs = [:nick, :birthdate, :bodysize, :strong]
end
