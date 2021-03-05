class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_and_belongs_to_many :restaurants
end
