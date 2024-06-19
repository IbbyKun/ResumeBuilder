import re
from pdfminer.high_level import extract_text
import spacy

# Load spaCy model
nlp = spacy.load('en_core_web_sm')

def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)

def extract_information(text):
    personal_info = extract_personal_info(text)
    experiences = extract_experiences(text)
    skills = extract_skills(text)
    return personal_info, experiences, skills

def extract_personal_info(text):
    personal_info = {}
    # Use regex to extract email, phone number, and names
    email_pattern = r'[\w\.-]+@[\w\.-]+'
    phone_pattern = r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'
    email_match = re.search(email_pattern, text)
    phone_match = re.search(phone_pattern, text)

    if email_match:
        personal_info['email'] = email_match.group(0)
    if phone_match:
        personal_info['phone'] = phone_match.group(0)

    # Use spaCy to extract names (Assuming the name is a proper noun at the beginning of the document)
    doc = nlp(text)
    names = [ent.text for ent in doc.ents if ent.label_ == 'PERSON']
    if names:
        personal_info['name'] = names[0]  # Taking the first detected name

    return personal_info

def extract_experiences(text):
    experiences = []
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == 'ORG':
            experiences.append(ent.text)
    return experiences

def extract_skills(text):
    # A simple approach to identify skills (this can be improved)
    skills = []
    skill_keywords = [
    # Software Engineering
    'Python', 'Java', 'C++', 'C', 'C#', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Angular', 'Vue.js',
    'Node.js', 'Django', 'Flask', 'Spring', 'Ruby on Rails', 'PHP', 'Laravel', 'ASP.NET', 'Express', 'Kotlin', 'Swift',
    'Objective-C', 'R', 'MATLAB', 'Scala', 'Go', 'Rust', 'Perl', 'Haskell', 'Lua', 'Shell Scripting', 'PowerShell',
    'Bash', 'Git', 'Docker', 'Kubernetes', 'Jenkins', 'Travis CI', 'CircleCI', 'AWS', 'Azure', 'Google Cloud Platform',
    'GCP', 'Terraform', 'Ansible', 'Puppet', 'Chef', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'Data Science',
    'Big Data', 'Hadoop', 'Spark', 'Kafka', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib',
    'Seaborn', 'NLTK', 'Spacy', 'OpenCV', 'Tableau', 'Power BI', 'Qlik', 'Looker', 'Excel', 'VBA', 'Blockchain',
    'Solidity', 'Smart Contracts', 'Cybersecurity', 'Penetration Testing', 'Ethical Hacking', 'Cryptography', 'Information Security',
    'Network Security', 'Cloud Security', 'IoT', 'Embedded Systems', 'Arduino', 'Raspberry Pi', 'FPGA', 'VHDL', 'Verilog',
    'Agile', 'Scrum', 'Kanban', 'JIRA', 'Confluence', 'Project Management', 'Trello', 'Asana', 'Slack', 'Microsoft Teams',
    'Linux', 'Windows', 'MacOS', 'Unix', 'SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch',
    'Firebase', 'SQLite', 'Oracle', 'NoSQL', 'GraphQL', 'RESTful APIs', 'SOAP', 'Microservices', 'Service-Oriented Architecture',
    'SOA', 'Event-Driven Architecture', 'Design Patterns', 'UML', 'TDD', 'BDD', 'Unit Testing', 'Integration Testing',
    'System Testing', 'Acceptance Testing', 'Performance Testing', 'Load Testing', 'Security Testing',
    'Usability Testing', 'A/B Testing', 'Test Automation', 'Selenium', 'Cypress', 'Appium', 'Robot Framework', 'Protractor',
    'JUnit', 'TestNG', 'Mocha', 'Chai', 'Jest', 'Enzyme', 'PyTest', 'Robot Framework', 'Web Development', 'Frontend Development',
    'Backend Development', 'Full Stack Development', 'Mobile Development', 'Android Development', 'iOS Development', 'Cross-Platform Development',
    'React Native', 'Flutter', 'Xamarin', 'Ionic', 'Game Development', 'Unity', 'Unreal Engine', 'Godot', '3D Modeling',
    'Blender', 'Maya', '3ds Max', 'ZBrush', 'Animation', 'After Effects', 'Premiere Pro', 'Audacity', 'Logic Pro', 'Pro Tools', 'Music Production', 
    'Ableton Live', 'FL Studio', 'Machine Learning Operations','MLOps', 'DevOps', 'CI/CD', 'Infrastructure as Code', 'IaC',  'Observability',
    'Monitoring', 'Logging', 'Metrics', 'Distributed Systems', 'High Availability', 'Scalability', 'Resilience', 'Fault Tolerance',
    'Enterprise Architecture', 'System Design', 'Data Engineering','Data Warehousing',  'Business Intelligence', 'Artificial Intelligence',
    'AI', 'Natural Language Processing', 'NLP', 'Computer Vision', 'CV', 'Robotics', 'Automation', 'RPA', 'Business Analysis',
    'Requirements Analysis', 'Stakeholder Management', 'Change Management', 'Risk Management', 'Financial Analysis', 'Accounting',
    'Bookkeeping', 'Marketing', 'SEO', 'SEM', 'Content Marketing', 'Digital Marketing', 'Social Media Marketing', 'Email Marketing',
    'Marketing Automation', 'Salesforce' 'HubSpot', 'CRM', 'Customer Relationship Management', 'E-commerce', 'Shopify', 'Magento',
    'WooCommerce', 'Supply Chain Management', 'SCM', 'Logistics', 'Inventory Management', 'Operations Management',

    # Data Science
    'R Programming', 'Data Wrangling', 'Data Visualization', 'Statistical Analysis', 'Predictive Modeling', 'Clustering', 'Classification',
    'Regression Analysis', 'Time Series Analysis', 'Dimensionality Reduction', 'Feature Engineering', 'Natural Language Processing',
    'Anomaly Detection', 'Hypothesis Testing', 'Bayesian Analysis', 'Experimental Design', 'Data Cleaning', 'Data Mining',
    'Data Ethics', 'Data Privacy', 'Data Governance', 'Big Data Technologies', 'Hadoop Ecosystem', 'Spark SQL', 'Stream Processing',
    'Data Lakes', 'Data Warehouses', 'NoSQL Databases', 'Cloud Data Services', 'Data Pipelines', 'MLOps', 'AutoML', 'Data Strategy',
    'Business Intelligence Tools', 'Data Reporting', 'Advanced Excel', 'SQL Querying', 'Data Security', 'Statistical Software',

    # IT
    'Network Administration', 'System Administration', 'IT Support', 'Help Desk', 'IT Infrastructure', 'IT Operations', 'IT Strategy',
    'IT Management', 'IT Governance', 'Service Desk', 'ITIL', 'COBIT', 'TOGAF', 'Information Security Management', 'Disaster Recovery',
    'Backup Solutions', 'Incident Management', 'Change Management', 'Configuration Management', 'Patch Management', 'IT Asset Management',
    'Software Deployment', 'Hardware Installation', 'Virtualization', 'VMware', 'Hyper-V', 'Cloud Computing', 'AWS Services', 'Azure Services',
    'Google Cloud Services', 'Database Management', 'Storage Solutions', 'Networking Protocols', 'Firewall Management', 'VPN Configuration',
    'VoIP', 'Telecommunications', 'Wireless Networks', 'Mobile Device Management', 'Endpoint Security', 'Antivirus Solutions',
    'Identity and Access Management', 'IAM', 'Active Directory', 'LDAP', 'Single Sign-On', 'SSO', 'Multi-Factor Authentication', 'MFA',
    'Security Information and Event Management', 'SIEM', 'Log Management', 'Monitoring Tools', 'Remote Access Solutions', 'IT Automation',
    'Scripting Languages', 'PowerShell Scripting', 'Bash Scripting', 'Command Line Tools', 'Remote Desktop Services',

    # Advocacy
    'Legal Research', 'Legal Writing', 'Client Counseling', 'Litigation', 'Trial Preparation', 'Case Management', 'Mediation', 'Arbitration',
    'Legal Compliance', 'Contract Drafting', 'Contract Negotiation', 'Intellectual Property Law', 'Corporate Law', 'Employment Law',
    'Family Law', 'Criminal Law', 'Civil Litigation', 'Environmental Law', 'Human Rights Advocacy', 'Social Justice', 'Public Speaking',
    'Policy Analysis', 'Lobbying', 'Community Outreach', 'Grant Writing', 'Fundraising', 'Nonprofit Management', 'Ethics', 'Public Relations',
    'Crisis Management', 'Campaign Management', 'Legal Documentation', 'Court Procedures', 'Paralegal Support', 'Legal Technology', 'E-Discovery',
    'Document Review', 'Legal Research Databases', 'Westlaw', 'LexisNexis', 'Legal Case Management Software', 'Law Practice Management',

    # Human Resources (HR)
    'Recruitment', 'Talent Acquisition', 'Onboarding', 'Employee Relations', 'Performance Management', 'Compensation and Benefits',
    'Payroll Administration', 'HR Policies', 'HR Compliance', 'Labor Laws', 'Employee Engagement', 'Training and Development',
    'Succession Planning', 'Workforce Planning', 'HR Metrics', 'HR Analytics', 'Diversity and Inclusion', 'Conflict Resolution',
    'Employee Retention', 'Organizational Development', 'Change Management', 'HRIS', 'Human Resource Information Systems',
    'Applicant Tracking Systems', 'ATS', 'HR Software', 'Employee Surveys', 'Exit Interviews', 'HR Consulting', 'Employee Wellness Programs',
    'Career Development', 'Leadership Development', 'Coaching and Mentoring', 'Benefits Administration', 'HR Strategy',

    # Sales
    'Sales Strategy', 'Sales Planning', 'Sales Forecasting', 'Lead Generation', 'Prospecting', 'Cold Calling', 'Sales Presentations',
    'Sales Negotiation', 'Closing Sales', 'Account Management', 'Customer Relationship Management', 'CRM Software', 'Salesforce Automation',
    'Sales Analytics', 'Pipeline Management', 'Sales Reporting', 'Customer Service', 'B2B Sales', 'B2C Sales', 'Inside Sales', 'Field Sales',
    'Retail Sales', 'Wholesale Sales', 'Channel Sales', 'Partnership Development', 'Sales Training', 'Sales Coaching', 'Product Knowledge',
    'Market Research', 'Competitor Analysis', 'Pricing Strategy', 'Sales Promotions', 'Trade Shows', 'Networking', 'Referral Programs',
    'Sales Operations', 'Order Processing', 'Sales Support', 'Sales Administration', 'Key Account Management', 'Customer Retention',
    'Cross-Selling', 'Up-Selling', 'Sales Targets', 'Quotas', 'Territory Management', 'Sales Incentives', 'Sales Metrics',

    # Electrical Engineering
    'Circuit Design', 'PCB Design', 'Digital Signal Processing', 'DSP', 'Analog Electronics', 'Digital Electronics', 'Microcontrollers',
    'FPGA', 'VHDL', 'Verilog', 'Embedded Systems', 'Power Electronics', 'Control Systems', 'Automation', 'Robotics', 'Signal Processing',
    'Communication Systems', 'Wireless Communication', 'RF Design', 'Antenna Design', 'Electromagnetics', 'VLSI', 'ASIC Design',
    'Mixed-Signal Design', 'Electronics Testing', 'LabVIEW', 'MATLAB', 'Simulink', 'PSpice', 'LTSpice', 'Altium Designer', 'Eagle',
    'Cadence', 'OrCAD', 'Electrical Wiring', 'Power Distribution', 'Renewable Energy Systems', 'Solar Power', 'Wind Power', 'Energy Storage',
    'Battery Management Systems', 'Electric Vehicles', 'Smart Grid Technology', 'IoT', 'Internet of Things', 'Sensors', 'Actuators',
    'MEMS', 'Nanotechnology', 'Optoelectronics', 'Photonics', 'Quantum Electronics', 'Biomedical Engineering', 'Medical Devices',
    'Regulatory Compliance', 'Safety Standards', 'EMI/EMC Testing', 'Failure Analysis', 'Reliability Engineering', 'Quality Control',
    'Project Management', 'Technical Documentation', 'Technical Support', 'R&D', 'Research and Development'
]

    
    for keyword in skill_keywords:
        if keyword.lower() in text.lower():
            skills.append(keyword)
    return skills

def main(pdf_path):
    text = extract_text_from_pdf(pdf_path)
    personal_info, experiences, skills = extract_information(text)
    print("Personal Information:")
    print(personal_info)
    print("\nExperience:")
    print(experiences)
    print("\nSkills:")
    print(skills)

if __name__ == "__main__":
    pdf_path = 'Ahmed CV.pdf'  # Replace with the path to your PDF resume
    main(pdf_path)
