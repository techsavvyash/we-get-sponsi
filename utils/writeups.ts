export const generateWriteUp = (writeupType: string, options: any) => {
  switch (writeupType) {
    case 'general':
      return `<p>Greetings from the National Institute of Technology, Kurukshetra, Haryana, India.<br><br>

Respected Sir/Ma'am,
<br><br>
We are thrilled to bring Techspardha'24 from 27th to 29th January 2024.
<br><br>
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra. <a href="http://bit.ly/TechVideo24">Feel free to have a sneak peek of the event!</a> 
<br><br>
Consider it as an opportunity to spread your reach over 30 NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
<br><br>
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
<br><br>
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
<br><br>
I assure you that, at the end of the day, you will be satisfied and glad to interact with NIT Kurukshetra students.
<br><br>
I am excited to collaborate with you and look forward to hearing from you soon. Please find attached the prospectus to get greater insight into our fest.
<br><br><br>
Thanks & Regards,<br>
${options.name}<br>
Sponsorship Head, Team Techspardha<br>
NIT Kurukshetra<br>
Mob: ${options.phone}<br>
</p>`

    case 'hackathon':
      return `<p>Greetings from the National Institute of Technology, Kurukshetra, Haryana, India.
      <br><br>
Respected Sir/Ma'am,
<br><br>
We are thrilled to bring Techspardha'24 from 27th to 29th January 2024. 
<br><br>
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra.  <a href="http://bit.ly/TechVideo24">Feel free to have a sneak peek of the event!</a>
<br><br>
Consider it as an opportunity to spread your reach over 30 NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
<br><br>
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
<br><br>
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
<br><br>
Hackshetra’24, the annual hackathon of Techspardha'24 is back once again from 27th to 29th January 2024 providing developers all around the country an opportunity to participate and work on the trending tech themes and to come up with solutions for common day-to-day lives. 
<br><br>
Date: 20 and 21 January 2024
<br><br>
This time it’s an offline 24-hour-long marathon where you can work on any technology including Cloud Computing using Firebase/AWS/Azure, Machine Learning, Alexa Skills, and literally anything that you can take out of your toolbox.
<br><br>
Our previous sponsors include Codechef, MIVI, Coding Ninjas, CodeStudio, UnSchool, Unstop, Titan, Gfg, Unibic, EaseMyTrip,  HackerEarth, Jetbrains, Skillenza, Coding Blocks, and Stryker and the events were a huge success as we were able to attract the participation of over 600 students. Some project themes included Healthcare, Travel and Tourism, Waste management, Games, etc.
<br><br>
Rules :<br>
• It is a team event (3 members).<br>
• First elimination will be based on the proposed solution and design submitted by the teams.<br>
• Second elimination will be carried out after a few hours into the event based on the progress made by the teams.<br>
<br>
We have started all our preparations for it at full throttle, and we will ensure massive participation in the hackathon this year too. Your support will significantly enhance the experience of the participants.
<br><br>
I assure you that, at the end of the day, you will be satisfied and delighted to interact with NIT Kurukshetra students.
<br>
I am excited to collaborate with you and look forward to hearing from you soon.
<br><br><br>
Thanks & Regards,<br>
${options.name}<br>
Sponsorship Head, Team Techspardha<br>
NIT Kurukshetra<br>
Mob: ${options.phone}<br>
</p>`

    case 'coding-platform':
      return `<p>Greetings from the National Institute of Technology, Kurukshetra, Haryana, India.
<br><br>
Respected Sir/Ma'am,
<br><br>
We are thrilled to bring Techspardha'24 from 27th to 29th January 2024. 
 <br><br>
Techspardha is the annual techno-managerial festival of the National Institute of Technology, Kurukshetra.  <a href="http://bit.ly/TechVideo24">Feel free to have a sneak peek of the event!</a> 
 <br><br>
Consider it as an opportunity to spread your reach over 30 NITs as it is one of North India's largest technical festivals witnessing participation from nationwide colleges and universities in addition to guest lectures from CEOs of reputable firms and professors of reputed institutions.
 <br><br>
Students are provided with an opportunity to showcase their skills and talents in a wide spectrum of events that test not only their technical know-how but also their managerial and soft skills. The events are aimed at encouraging students to come out of textbooks and apply their knowledge in a real-life setup.
 <br><br>
With an ingenious crowd of 12,000 folks at work, we shall provide you with all the publicity you need. Our website, mobile app, local sources of endorsement, as well as our growing social media reach, will make this an even more fantastic opportunity for promoting your brand. Also, as per your requirement and target market, we offer various events such as Excalibur, Encoder, Hackathon, and many more.
 <br><br>
We are organizing a Coding Contest known as "Encoder" as an event of Techspardha on 27th January 2024(tentatively), and we would love to have you on board as a sponsor for this event. 
Techspradha’s annual competitive programming contest ‘Encoder’ is the biggest coding event held during the fest in which one has to solve a given set of questions in a limited time duration on prestigious coding platforms.
It is a short programming contest where you can show off your programming skills, compete with the best minds across the planet, win exciting prizes, be recognized, or simply solve for fun.
<br><br>Rules :
<br>
1. There will be an ACM Style Ranklist- Users are ranked according to the most problems solved. <br>
2. Ties will be broken by the total time for each user in ascending order of time. <br>
3. There is no partial scoring.<br>
<br>
We have started all our preparations for it at full throttle, and we will ensure massive participation in this contest this year. Your support will significantly enhance the experience of all the participants.
<br><br>
I assure you that, at the end of the day, you will be satisfied and delighted to interact with NIT Kurukshetra students.
<br>
I am excited to collaborate with you and look forward to hearing from you soon.
<br><br><br>         
Thanks & Regards,<br>
${options.name}<br>
Sponsorship Head, Team Techspardha<br>
NIT Kurukshetra<br>
Mob: ${options.phone}<br>
</p>`
  }
}
