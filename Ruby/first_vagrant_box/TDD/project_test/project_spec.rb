require_relative 'project'
RSpec.describe Project do
    before(:each) do
        @project1 = Project.new("Project 1", "Description 1", "John")
        @project2 = Project.new("Project 2", "Description 2", "Jim")
    end
    it "has a getter and setter for name attriute" do
        @project1.project_name = "Changed Name"
        expect(@project1.project_name).to eq("Changed Name")
    end
    it "has a method elevator_pitch to explain name and description" do
        expect(@project1.elevator_pitch).to eq("Project 1, Description 1, John")
        expect(@project2.elevator_pitch).to eq("Project 2, Description 2, Jim")
    end
    it "has a set method for tasks" do 
        @project1.add_tasks("New Task")
        @project1.add_tasks("New Task 2")
        expect(@project1.get_tasks).to eq(["New Task", "New Task 2"])
    end
    it "has a method to print all tasks" do
        @project1.add_tasks("New Task")
        @project1.add_tasks("New Task 2")        
        expect{ @project1.print_tasks }.to output("New Task\nNew Task 2\n").to_stdout
    end
end

