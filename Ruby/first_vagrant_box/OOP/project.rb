class Project
    attr_accessor :project_name, :project_desc
    def initialize(p_name, p_desc)
        @project_name = p_name
        @project_desc = p_desc
    end

    def elevator_pitch()
        print "#{@project_name}, #{@project_desc}"
    end
end 

project1 = Project.new("Project 1", "Description 1")

puts project1.project_name
puts project1.elevator_pitch