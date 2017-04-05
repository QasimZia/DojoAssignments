class Hosptal(object):
    #init function
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.patients = []
        beds = 1

    def admit(self, patient):
        if patients >= capacity:
            return "Hospital full."
        else:
            self.patient.setBed(beds)
            self.patients.append(patient)
            beds += 1
            return "Admission complete"
    
    def discharge(self, patientID):
        #discharge patient from list
        pass
        #reset patients bed number

class Patient(object):
    #init function
    def __init__(self, name, allergies, bedNum):
        # self.id = #random number
        self.name = name
        self.allergies = allergies
        self.bednum = 0

    def setBed(self, num):
        self.bedNum = num
        return self
