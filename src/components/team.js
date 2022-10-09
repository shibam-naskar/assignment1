import React from "react"
import './team.css'


var userdata = [
    {
        name: "John Doe",
        reg: "Flutter Lead"
    },
    {
        name: "Bhanu Sharma",
        reg: "Web Lead"
    },
    {
        name: "Geet Basu",
        reg: "Flutter Lead"
    },
    {
        name: "Shak Doe",
        reg: "Flutter Lead"
    },
    {
        name: "John Doe",
        reg: "Flutter Lead"
    },
    {
        name: "Bhanu Sharma",
        reg: "Web Lead"
    },
    {
        name: "Geet Basu",
        reg: "Ai Ml Lead"
    },
    {
        name: "Shak Doe",
        reg: "BlockChain Lead"
    },
]


function TeamPage() {
    return (
        <div>
            <div className="textBack">
            <h1 className="textTeam">Meet Our Amazing Team</h1>
            </div>
            <div className="body">
                <div class="container">
                    <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src="https://github.com/shibam-naskar/test/blob/shibam-portfolio/WhatsApp%20Image%202022-10-09%20at%201.23.50%20AM.jpeg?raw=true" alt="" />
                            </div>
                            <div class="contentBx">
                                <h4>Shibam Naskar</h4>
                                <h5>Founder</h5>
                            </div>
                            <div class="sci">
                                <a href="/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="body">
                <div class="container">
                    {userdata.map((item, index) => (
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img src={`https://i.pravatar.cc/150?img=${index + 7}`} alt="" />
                                </div>
                                <div class="contentBx">
                                    <h4>{item.name}</h4>
                                    <h5>{item.reg}</h5>
                                </div>
                                <div class="sci">
                                    <a href="/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamPage;