class BuddiesController < CrudController
  self.permitted_attrs = [:nick, :birthdate, :size, :strong]
end
