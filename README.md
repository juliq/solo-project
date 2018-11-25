# Introduction
Some 25 years ago, three women in my community came together with the goal of creating a community garden club that would partner with the city of  Deephaven to maintain the community gardens. The Cottagewood Garden Club was formed. 

The club has now grown to include 50 active members. Each member serves on a garden team and a committee. The garden teams meet weekly to plant, weed and maintain their garden from spring through fall. The committees meet throughout the year to keep the club moving forward.

The problem is that with so many club members, it is sometimes a challenge to know everyone’s name. This can be especially challenging for new members. Our current directory is an excel spreadsheet that can be difficult to read. The garden teams and committees are also recorded as lists.

The solution was to build an app that facilitates member camaraderie by adding member photos. The CGC Member App was born! 

A member accesses the site by logging in with email and password.

After logging in, a member will click on the Members link to see the directory – as a list, or member photos. 
Likewise, the garden teams and committees can be viewed as a list or as member photos.
For example: let’s say I’m a new member. 
• I would like to see who is in the club.
• I will be on the Connie Getsch Garden Team – let’s look at who will be on my team
• Finally, I will serve on the Hospitality committee. I would like to know who is on my team

The administrator will have the ability to add a new member or edit or delete a current member.

The most challenging aspect of building this app was working with the admin functionality. 

In the future, I would like to build out the database further and create a history of membership. 

Technologies I used include: Node, Express, React, Redux, Redux-Saga, PostgreSQL, Passport, CSS and Bootstrap



## Below are the tables you will need to create in order to run this app

CREATE TABLE "members" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR,
	"last_name" VARCHAR,
	"mobile" VARCHAR,
	"email" VARCHAR,
	"address" VARCHAR,
	"city" VARCHAR,
	"zipcode" INT,
	"BD" VARCHAR,
	"img_url" VARCHAR,
	"garden_team_id" INT,
	"captain" BOOLEAN,
	"committee_id" INT,
	"chair" BOOLEAN,
	"membership" VARCHAR,
	"member_since" VARCHAR,
	"year_resigned" VARCHAR,
	"dues_paid" BOOLEAN
);
	
CREATE TABLE "committee" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR,
	"committee_id", INT REFERENCES "members";
);

CREATE TABLE "garden_team" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR,
	"garden_team_id", INT REFERENCES "members";
);

CREATE TABLE "person" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
	"is_admin" BOOLEAN
);

# Dependencies
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


