require 'test_helper'

class UserTest < ActiveSupport::TestCase
	let(:valid_attributes) {
		{
			first_name: "Jason",
			last_name: "Seifer",
			email: "jason@teamtreehouse"
		}
	}
	describe User do |variable|
		let(:user) {User.new(valid_attributes)}
		context "validations" do
			it "requires an email" do
				expect(user).to validate_presence_of(:email)

		end	
	end
end
