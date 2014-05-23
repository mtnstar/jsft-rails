class BuddySerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :nick, :bodysize, :birthdate, :strong
end
