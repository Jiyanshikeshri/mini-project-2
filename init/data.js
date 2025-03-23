const sampleClub = [
    {
      "title": "Arts And Creativity Club",
      "description": "The Art Club and Creativity Club is a place for practicing artists to hone their skills, develop their techniques and portfolios, collaborate with other artists like themselves, create bonds with the community through the arts, and learn how to work together through group projects that will beautify the school and community.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/art-club.jpg",
      },
      "location": "Engineering Building, Room 201",
      "head": "Dr. Rekha Jain",
    },
    {
      "title": "Advance Studies Club",
      "description": "The Advance Studies Clubs provides Guidance from mentors *Get advice for competitive exams like GATE, GRE ,UPSC etc. *Seminar and workshop on topics of students interest.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/adventure-club.jpg",
      },
      "location": "Arts Building, Room 103",
      "head": "Dr. Ranubala Marothia",
    },
    {
      "title": "Cultural Club",
      "description": "It is the place where students can showcase what they have got. It helps to discover their talent. Cultural events include competitions such as instrumental, singing, dance etc. Every year, this club organizes activities such as a MoonStone, Dandiya Night, Science Day, Tech fest, Talent Hunt, Fresher's Party, Farewell, Fest and Alumni Meet.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/culture-club.jpg",
      },
      "location": "Student Union, Room 304",
      "head": "Dr. Preeti Jain",
    },
    {
      "title": "Literary Club",
      "description": "The Literary Club is a place where students can meet to read and write. The Literary Club has been an ongoing and active club for several years. It is based upon using the creativity skills it takes to be a writer. Club members meet to discuss books and the craft of writing.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/literary-club.jpg",
      },
      "location": "Fine Arts Center, Room 201",
      "head": "Dr. Shipra Ahuja Joshi",
    },
    {
      "title": "Media Club",
      "description": "The objective of the club is to provide a forum for the students to voice forth their opinions, views, and perspectives. It aims to enhance keen observation skills, encourage critical thinking, and learn to be effective communicators. The Club encourages all forms of verbal and non-verbal communications by budding artists, photographers, cinematographers, poets, writers to express themselves. It consistently strives towards innovation and excellence in all dimensions of media studies.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/media-club.jpg",
      },
      "location": "Major-auditorium",
      "head": "Mr. Kuber Datt Gautam",
    },
    {
      "title": "Photography and Film Club",
      "description": "Photography & Film Club engages students who exhibit interest and talent in photography, filming, music and dance. Students are given the opportunity to develop their skills through training programs such as video editing and short film projects, photography courses, exhibitions, field trips and competitions.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/photography-club.jpg",
      },
      "location": "Tech Lab, Room 210",
      "head": "Mr. Anil Patidar",
    },
    {
      "title": "Social & Eco Club",
      "description": "The main aim of establishing the Socio – Eco Club was to conserve natural resources and the natural environment to create an Eco-friendly environment and create awareness of biodiversity conservation and local environmental issues and to create a clean and green consciousness among students through various innovative methods",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/social-club.jpg",
      },
      "location": "Library, Room 404",
      "head": "Dr. P Hari Krishna",
    },
    {
      "title": "Sports Club",
      "description": "The Sports club is committed to providing a healthy sporting habit among the students. It helps to learn teamwork at work, coordination among diverse cultural & ethnic groups and mainly infuses discipline & instills the value system in one individual.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/sports-club.jpg",
      },
      "location": "Business School, Room 301",
      "head": "Mr. Ruchir Lashkari",
    },
    {
      "title": "Techno Club",
      "description": "The Techno Club provides students with opportunities to discuss the various latest Technological issues outside the classroom in order to create a greater appreciation and understanding of technology. Students plan field trips, guest lectures, and special events during the year.",
      "image": {
        filename:"clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/techno-club.jpg",
      },
      "location": "Greenhouse, Room 105",
      "head": "Dr. Nitika Vats Doohan",
    },
    {
      "title": "Maths Club",
      "description": "Mathematics club is to develop an environment to acquaint students with the future scope in the subject to enhance their knowledge and Math skills. We also want to develop this Club to utilize the social and practical cause of Mathematics.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/resources/img/clubs/literary-club.jpg",
      },
      "location": "Student Union, Room 208",
      "head": "Dr. Pranjali Kekre",
    },
    {
      "title": "MUIEEE Club",
      "description": "The IEEE (Institute of Electrical and Electronics Engineers) club provides opportunities to engage with the latest technological advancements, attend workshops, and network with industry professionals.",
      "image": {
        filename: "clubimage",
        url: "https://www.medicaps.ac.in/upload/news/gimpses-5.jpg",
      },
      "location": "Cultural Center, Room 102",
      "head": "James Garcia",
    },
    {
      "title": "Sahityik Club",
      "description": "Sahityik is a cultural club dedicated to promoting literary activities, poetry, storytelling, and creative writing among students.",
      "image": {
        filename: "clubimage",
        url: "https://tse1.mm.bing.net/th?id=OIP.0xtozEoHpMhMc7cYoKEkhQHaHa&pid=Api",
      },
      "location": "Gymnasium, Room 215",
      "head": "Isabella Martinez",
    },
    {
      "title": "Students' Technical and Innovation Club",
      "description": "STIC is the first official techno-club of Medi-Caps University, Indore. It focuses on bringing a new era of technology to the university.",
      "image": {
        filename: "clubimage",
        url: "https://tse1.mm.bing.net/th?id=OIP.gGQtArwJnrRDVAEnVZGzGAHaHa&pid=Api",
      },
      "location": "Student Union, Room 301",
      "head": "Aiden Rodriguez",
    },
    {
      "title": "eSports Club",
      "description": "Esports clubs are dedicated to competitive gaming and related activities. They provide platforms for students to engage in esports competitions and events.",
      "image": {
        filename: "clubimage",
        url: "https://tse3.mm.bing.net/th?id=OIP.NodMigrpov7locFYcigwYgHaFj&pid=Api",
      },
      "location": "Art Studio, Room 102",
      "head": "Charlotte Harris",
    },
    {
      "title": "Science Club",
      "description": "Science clubs offer students opportunities to engage in scientific activities beyond the classroom. They conduct experiments, workshops, and discussions to enhance students' understanding and interest in science.",
      "image":{
        filename: "clubimage",
        url:  "https://tse1.mm.bing.net/th?id=OIP.rAY59Yjbz35YQwoagrr9cgHaE8&pid=Api",
      },
      "location": "Tech Lab, Room 150",
      "head": "Oliver Clark",
    },
    {
      "title": "NSS & Socio-Club",
      "description": "NSS clubs focus on community service and social welfare activities. They organize blood donation camps, environmental awareness programs, and other social service activities.",
      "image": {
        filename: "clubimage",
        url: "https://tse4.mm.bing.net/th?id=OIP.mY2CPah8949jYUD-HRuMewHaE8&pid=Api",
      },
      "location": "Dining Hall, Kitchen Area",
      "head": "Grace Anderson",
    },
    {
      "title": "AWS Cloud Club",
      "description": "AWS Cloud Clubs are student-led organizations that focus on cloud computing technologies. They provide resources, workshops, and events to help students learn about cloud technologies and services.",
      "image": {
        filename: "clubimage",
        url: "https://tse4.mm.bing.net/th?id=OIP.gLRXzdOQ5aJN2cH3QgVvMwHaEX&pid=Api",
      },
      "location": "Science Building, Room 205",
      "head": "Noah Thompson",
    },
    {
      "title": "Google Developer Group Club",
      "description": "GDG clubs are communities of developers who share a passion for Google's developer technologies. They organize meetups, workshops, and hackathons to promote learning and collaboration among developers.",
      "image": {
        filename: "clubimage",
        url: "https://tse1.mm.bing.net/th?id=OIP.CR3CrcFqoQ6O7u2A_xQ8NAHaHa&pid=Api",
      },
      "location": "Library, Room 303",
      "head": "Amelia Scott",
    },
  ];

  module.exports = {data : sampleClub};
  
  
  