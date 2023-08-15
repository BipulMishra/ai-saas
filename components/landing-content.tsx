"use client" ;
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
const testimonials= [
    {
        name:"Bipul Mishra",
        avatar:"B",
        title:"Web Developer",
        description:"Genius is a masterpiece! It has streamlined my workflow and its brilliant features have left me in awe."
    },
    {
        name:"Gautam Mishra",
        avatar:"G",
        title:"Software Engineer",
        description:"Genius has exceeded my expectations - its intelligent features have revolutionized how I approach tasks, making it an indispensable tool in my daily life."
    },
    {
        name:"Aditya Prakash",
        avatar:"A",
        title:"Data Analyst",
        description:"Genius has transformed the way I work – its innovative features have truly elevated my productivity to new heights!!"
    },
    {
        name:"Shivam Chaudhary",
        avatar:"S",
        title:"Machine Learning Engineer",
        description:"Genius is truly a game-changer! It's made my life so much easier with its remarkable features and intuitive design."
    },


]
export const LandingContent =()=>{
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                
                {testimonials.map((item) =>(
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>

                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>

                    </Card>

                ))} 

            </div> 
        </div> 
    ) 
} 