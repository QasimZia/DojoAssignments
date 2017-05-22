require 'rails_helper'

feature 'authentication feature' do
    before (:each) do
        @user = create(:user)
    end
    feature 'user attempts to sign-in' do
        scenario 'visits sign-in page, prompted with email and password fields' do
            visit '/session/new'
            expect(page).to have_field("email")
            expect(page).to have_field("password")
        end
        scenario 'logs in user if email/password combination is valid' do
            log_in
            expect(page).to have_content('User successfully logged in')
        end

        scenario 'does not sign in user if email is not found' do
            visit '/session/new'
            fill_in 'email', with: ''
            click_button 'Log In'
            expect(page).to have_content('User not found, try again')
        end

        scenario 'does not sign in user if email/password combination is invalid' do
            visit '/session/new'
            fill_in 'email', with:'dp@email.com'
            fill_in 'password', with:'wrongword'
            click_button 'Log In'
            expect(current_path).to eq('/session/new')
        end
    end
    feature 'user attempts to log out' do
        scenario 'displays "Log Out" button when user is logged on' do
            log_in
            expect(page).to have_button('Log Out')
        end
        scenario 'logs out user and redirects to login page' do
            log_in
            click_button 'Log Out'
            expect(current_path).to eq('/session/new')
            expect(page).not_to have_button('Log Out')
        end
    end
end 