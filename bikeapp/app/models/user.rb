class User < ActiveRecord::Base
	validates :email, :presence
end
