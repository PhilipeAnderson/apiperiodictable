# API Peridic Table

## This API was born out of the need to use periodic table data.

After scouring the internet for some API's to consume data from a periodic table and not finding it, I decided to create my own API.<br />
Despite being a simple model where it is only possible via GET, it was still very challenging.<br />
I hope it will be useful in some project and that it may have contributed in some way to the dissemination of such rich content.<br />

## How to access?

This project was built on NodeJS and hosted on Heroku.<br />
access: https://apiperiodictable.herokuapp.com/ <br />
All API content is in the root path " .../ ", just access the link above and use the data through the GET method.<br />

## Technologies used!

The dependencies used in the project were:<br />
  * Express 
  * Cors 
  * Body-Parser
  * Morgan
  * Nodemon

It was still necessary to install the Heroku CLI<br />
Only after these steps was it possible to see the API working :)

Below is a table with the technologies and their versions.
<table border="1">
  <thead>
    <th>
      TECH:
    </th>
    <th>
      NodeJS
    </th>
    <th>
      Express
    </th>
    <th>
      Cors
    </th>
    <th>
      Body-Parser
    </th>
    <th>
      Morgan
    </th>
    <th>
      Nodemon
    </th>
  </thead>
  <tbody>
    <th>
     VERSIONS:
    </th>
     <td>
      16.13.1
    </td>
    <td>
      4.17.2
    </td>
    <td>
      2.8.5
    </td>
    <td>
      1.19.1
    </td>
    <td>
      1.10.0
    </td>
    <td>
      2.0.15
    </td>
  </tbody>
</table>

## And the Database ? 

Don't be disappointed when I say that all API information is being printed by a const db.<br />
Located inside the database/database directory.<br/>
The structure chosen was the JSON format as shown below.<br />


<div align="center">
  <img src="/assets/readmejson.png" alt="" width="240px"/>
</div>


