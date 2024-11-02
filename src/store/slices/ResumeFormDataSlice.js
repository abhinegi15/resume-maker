import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   formData : {
       contactData : {
            number : '1234567890',
            email : 'abc@gmail.com',
            address : 'Chandigarh',
       },
        educationData : [
            {
                year : '2008' ,
                degree : 'Master Of Computer Application',
                university : 'Chandigarh University' ,
            },
            {
                year : '2005' ,
                degree : 'Bachelor Of Computer Application',
                university : 'Punjab University' ,
            }
        ],
        skillsData : [
            {
                skill : 'Html',
                rating : 4,
            },

            {
                skill : 'Css',
                rating : 4,
            },

            {
                skill : 'Bootstrap',
                rating : 4,
            },

            {
                skill : 'Js',
                rating : 3,
            },

            {
                skill : 'Jquery',
                rating : 3,
            },

            {
                skill : 'React',
                rating : 3,
            },

            {
                skill : 'Material UI',
                rating : 3,
            },

            {
                skill : 'Figma',
                rating : 3,
            },

            {
                skill : 'Photoshop',
                rating : 2,
            },

        ]
    },

    rightFormData : {
       name : 'Shubham Rawat',
       designation : 'Frontend Developer',
       description:'Skilled Frontend Developer with 2 years of experience in building responsive, user-friendly websites and web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React and Vue. Passionate about creating seamless user experiences with a focus on clean design and efficient code. Strong collaborator, committed to delivering high-quality, scalable solutions.',
    
       experience : [
        {
            period : '2023 - 2024',
            organization : 'Shaurya Software Pvt. Ltd. ( Zirakpur , Punjab )',
            designation : 'Frontend Developer',
            description : 'In my role as a frontend developer leading the ERP project for school automation, I spearheaded the design and implementation of a responsive user interface that streamlined various administrative and academic functions. I collaborated closely with backend developers to integrate real-time data solutions, optimized the user experience for diverse roles such as students, teachers, and administrators, and ensured the platform was accessible and efficient across devices. My contributions significantly enhanced the system’s usability, making complex workflows intuitive, which ultimately improved operational efficiency for the entire school. ',
        },
        {
            period : '2022 - 2023',
            organization : 'Wavy Informatics ( Panchkula , Haryana )',
            designation : 'Web Designer',
            description : 'In my role as a Web Designer, I have developed and implemented responsive websites that align with UX/UI best practices, significantly enhancing user experience and engagement. I collaborate closely with cross-functional teams to translate project requirements into visually compelling designs using tools like Adobe Creative Suite, Figma, and Sketch. My experience includes leading redesign projects that modernized site layouts and improved usability, as well as creating e-commerce platforms optimized for conversion. Additionally, I bring SEO expertise to ensure designs support increased organic traffic, and I have mentored junior designers to foster a culture of innovation and growth within the design team.',
           },
       ],

       projects : [
        {
            name : 'School ERP System',
            description : 'Developed a responsive ERP system for school automation using React, Material-UI, and CSS, featuring reusable layouts for consistent UI.',
            link : 'https://jusklik.com/',
        },

        {
            name : 'E-commerce Website',
            description : 'Created a personal e-commerce platform with product listings, using React, Bootstrap, and CSS, hosted on Vercel for easy access and mobile responsiveness.',
            link : 'https://jusklik.com/',
        },
       ]
    }
}


const ResumeFormDataSlice = createSlice({
    name : 'resumeData' ,
    initialState ,
    reducers : {
        setFormData (state , action){
           state.formData = action.payload;
        },
        setRightFormData (state , action){
            state.rightFormData = action.payload;
        },

    }
})

export const { setFormData , setRightFormData } = ResumeFormDataSlice.actions;


export default ResumeFormDataSlice.reducer