require 'rails_helper'

feature 'User features' do
    feature 'user sign-up' do
        scenario 'visits sign-up page' do
            visit '/session/new'
            click_on 'New User?'
            expect(current_path).to eq('/users/new')
            expect(page).to have_field('name')
            expect(page).to have_field('email')
            expect(page).to have_field('password')
            expect(page).to have_field('password_confirmation')
        end
        scenario 'with improper inputs, redirects back to sign in and shows validations' do
            visit '/users/new'
            fill_in 'name', with: ''
            fill_in 'email', with: 'wrongemail'
            fill_in 'password', with: 'pword'
            fill_in 'password_confirmation', with: 'doesntmatch'
            click_button 'Sign Up'
            expect(current_path).to eq('/users/new')
        end
        scenario 'with proper inputs, create user and redirects to login page' do
            visit '/users/new'
            fill_in 'name', with: 'Jacob Green'
            fill_in 'email', with: 'jg@email.com'
            fill_in 'password', with: 'password'
            fill_in 'password_confirmation', with: 'password'
            click_button 'Sign Up'
            expect(page).to have_content('Jacob Green')
        end
    end

    feature 'user settings dashboard' do
        before do
            @user = create(:user)
            log_in
            click_on 'Edit Profile'
        end
        scenario 'visit users edit page' do
            expect(current_path).to eq("/users/#{@user.id}/edit")
            expect(page).to have_field('name')
            expect(page).to have_field('email')
        end
        scenario 'inputs filled out correctly' do
            fill_in 'name', with: 'Jake'
            click_on 'Update'
            expect(page).to have_content('Jake')
            expect(current_path).to eq("/users/#{@user.id}")
        end
        scenario 'incorrectly updates information'
        scenario 'correctly updates information'
        scenario 'destroys user and redirects to registration page'
    end
end