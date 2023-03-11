function ProjectDoc(){
    const projects = [
        
        {
            title : "Secrets",
            content : "It lets the user Register or Login and post their secrets to the Website.",
            lnk : "https://mysecrets.onrender.com",
            tags: ["Google Oauth 2", "Mongoose", "Passport"],
            githlnk: "https://github.com/niyati-thakkar/mySecrets"  
        },
        {
            title : "Keeper App",
            content : "Keeper App is built using React components. Keeper App, a React project helps the user keep track of the tasks or lists in their day-to-day lives. These lists can be deleted when not in use.",
            lnk : "https://my-keeper.vercel.app/",
            tags: ["ReactJS"],
            githlnk: "https://github.com/niyati-thakkar/my-keeper"  
        },
        {
            title : "Newsletter Signup",
            content : "The newsletter signup project adds user details to the Mailchimp services list.",
            lnk : "https://newsletter-signup-oldp.onrender.com/",
            tags: ["MailChimp", "Express"],
            githlnk: "https://github.com/niyati-thakkar/Newsletter-Signup" 
        },
        {
            title:"Portfolio",
            content:"Here's my Portfolio prepared with ReactJS, Bootstrap. and CSS moreover",
            lnk : "https://my-portfolio-niyati-thakkar.vercel.app/",
            tags: ["ReactJS", "Bootstrap","HTML","CSS"],
            githlnk: "https://github.com/niyati-thakkar/Newsletter-Signup"
        },
        {
            title : "Daily Journal",
            content : "Daily Journal lets the user write and display Journal. It is created using the EJS library and MongoDB database. It consists of a Home page, Contact Page, About Page and Compose page where the user can create a new journal. These composed journals can then be viewed on the Home page as well as individually.",
            lnk : "https://daily-journal-kl8j.onrender.com/",
            tags: ["EJS", "lodash", "MongoDB","Mongoose", "Express"],
            githlnk: "https://github.com/niyati-thakkar/Daily-Journal"  
        },
        {
            title : "Todo List",
            content : "ToDo list is created using express and Nodejs. It lets the user create various lists and stores the list and list items in a database. The items on the list can be deleted by checking the checkbox.",
            lnk : "https://todolist-fw94.onrender.com/",
            tags: ["Mongoose", "Express", "JS Date"],
            githlnk: "https://github.com/niyati-thakkar/TodoList"  
        },
        {
            title : "Simon Game",
            content : "It's an exciting game of lights and sounds in which players must repeat random sequences of flashing lights by pressing the colored pads in the correct order.",
            lnk : "https://niyati-thakkar.github.io/Simon-Game/",
            tags: ["HTML", "CSS", "JavaScript"],
            githlnk: "https://github.com/niyati-thakkar/Simon-Game"  
        },
        {
            title : "Tindog",
            content : "Tindog is an online web application where we can find friends for their Pets in nearby. It is built using various bootstrap components such as carousals, cards, buttons, icons, footers, etc.",
            lnk : "https://niyati-thakkar.github.io/Tindog/",
            tags: ["HTML", "CSS", "Bootstrap Components"],
            githlnk: "https://github.com/niyati-thakkar/Tindog"  
        },
        {
            title : "Dice Game",
            content : "The Dice game rolls two dice by selecting a random number each declaring a winner. It uses CSS, Javascript, and Bootstrap.",
            lnk : "https://niyati-thakkar.github.io/Dice-Game/",
            tags: ["HTML", "CSS", "JavaScript"],
            githlnk: "https://github.com/niyati-thakkar/Dice-Game"  
        },
        {
            title : "Profile",
            content : "It is a resume built with pure HTML and HTML tables.",
            lnk : "https://niyati-thakkar.github.io/Profile/",
            tags: ["HTML","HTML Tables"],
            githlnk: "https://github.com/niyati-thakkar/Profile"  
        },
        {
            title : "Plugins",
            content : "This project is built using Bootstrap Plugins. It contains the Bootstrap 'card' class. The order of the components remains the same irrespective of the user selection.",
            lnk : "https://niyati-thakkar.github.io/Plugins/",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap Cards","Container"],
            githlnk: "https://github.com/niyati-thakkar/Plugins"  
        },
        {
            title : "Shopping Tabs",
            content : "It is a simple web app made using Bootstrap and CSS. It uses svg components to display icons and tabs where the user can switch between contents. Active components are displayed with active properties.",
            lnk : "https://niyati-thakkar.github.io/ShoppingTabs/",
            tags: ["HTML", "CSS", "JavaScript", "SVG icons", "Bootstrap Tabs"],
            githlnk: "https://github.com/niyati-thakkar/ShoppingTabs"  
        },
        {
            title : "Tabs",
            content : "Tabs lets the user select from multiple tabs and display specific content using JavaScript, CSS, and HTML.",
            lnk : "https://niyati-thakkar.github.io/Tabs/",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap Navigation Bar"],
            githlnk: "https://github.com/niyati-thakkar/Tabs"  
        },
        {
            title : "Computers",
            content : "This website displays facts about computers with a box having different shadow classes each present in bootstrap.",
            lnk : "https://niyati-thakkar.github.io/Computers/",
            tags: ["HTML", "CSS", "JavaScript","Bootstrap Shadow"],
            githlnk: "https://github.com/niyati-thakkar/Computers"  
        }
        
       
        
        
        
        
        
        
        

    ];
    return projects;
}
export default ProjectDoc;