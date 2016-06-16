  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>contact me</title>

<link href="favicon.ico" rel="icon" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>
	<div id="wrapper">
		<div id="header">
			<div id="nav_main">
				<ul id="nav_main_lst">
					<li id="home_btn"><a href="index.php"><img src="images/home-3.png" alt="home page button"/></a></li>
					<li id="gallery_btn"><a href="gallery.php"><img src="images/gallery-3.png" alt="gallery page button"/></a></li>
					<li id="resume_btn"><a href="resume.php"><img src="images/resume-3.png" alt="resume page button"/></a></li>
					<li id="contact_btn"><a href="contact.php"><img src="images/mail-3.png" alt="contact me page button"/></a></li>
				</ul>
				<ul id="nav_main_label">
					<li id="home_li">Home</li>
					<li id="gallery_li">Gallery</li>
					<li id="resume_li">Resume</li>
					<li id="contact_li">Contact Me</li>
				</ul>
			</div><!--nav_main-->
			<div id="branding">
				<p id="logo"><img src="images/logo.png" alt="Data Loom logo"/></p>
			</div><!--branding-->
		</div><!--header-->
			
		<div id="content_main">
		
		<h1>Contact Me</h1>
			
			<div id="mailForm" class="box1">
            	<form method="post" enctype="multipart/form-data" action="contact_code.php">
				<!--<p id="form-cap">Have a question or suggestion? Send us a quick email. Feel free to contract us with you questions or concerns. We will responds to you as soon as possible.</p>-->
					<fieldset>
                    	<h3></h3>
						<!--<legend>Your Contact Details</legend>-->
						<p>
							<label for="grab_name">Name: </label>
							<input name="grab_name" id="grab_name" type="text" /> 
						</p>
						<p>
							<label for="grab_email">Email Address: </label>
							<input name="grab_email" id="grab_email" type="text"/>
						</p>
						<p>
							<label for="grab_subject">Subject: </label>
							<input name="grab_subject" id="grab_subject" type="text"/>
						</p>
						<p>
							<label for="grab_text">Message: </label>
							<textarea name="grab_text" id="grab_text" rows="2" cols="20"></textarea>
							
						</p>
                        
					</fieldset>
					<p>
						<input title="Send Message" name="grab_submit" id="grab_submit" type="submit"  value="Send" />
						<input title="Clear and reset the form." name="grab_reset" id="grab_reset" type="reset" value="Clear" />
					</p>
				</form>   
			</div><!--mailForm-->		
		
		
		
			<div id="contact_info">
				<p>If you want to contact me you can fill out the form or call or email me directly.<p>
				<ul>
					<li id="phone"><h3>Phone: </h3>214.850.7330</li>
					<li id="email"><h3>Email: </h3>brewerdev@gmail.com</li>
				</ul>			
			</div>
		</div><!--content_main-->
		
		<div id="site_info">
		<address>
			Data Loom Interactive, Inc.Copyright&copy; 2012 Updated: 9/22/2012
		</address>
		</div><!--site_info-->
	</div><!--wrapper-->
</body>
</html>
