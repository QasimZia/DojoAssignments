class Project
    attr_accessor :project_name, :project_desc, :project_owner
    def initialize(p_name, p_desc, owner)
        @project_name = p_name
        @project_desc = p_desc
        @project_owner = owner
        @tasks = []
    end

    def get_tasks 
        @tasks
    end

    def add_tasks(task)
        @tasks.push(task)
    end

    def print_tasks
        puts @tasks
    end

    def elevator_pitch()
        "#{@project_name}, #{@project_desc}, #{@project_owner}"
    end
end 