<?php $title = "Students Info"; include "inc/headerr.php"; ?>
<?php include "classes/config.php"; ?>

    <?php
	$result = '';
	$result3 = '';
    try {
    $conn = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
	}
	
	/* TEACHER SEARCHING */
    if (isset($_POST['t_submit'])) {
	$t_name = $_POST['name'];
    $stmt = $conn->prepare("SELECT * FROM instructor WHERE name='".$t_name."'"); 
    $stmt->execute();
	$result = $stmt->fetch();
	
	$stmt2 = $conn->prepare("SELECT * FROM course WHERE teacher_id='".$result['T_ID']."'"); 
    $stmt2->execute();
	$result2 = $stmt2->fetch();
	}     
	
	/* ROOM SEARCHING */
    if (isset($_POST['r_submit'])) {
	$time_slot_id = $_POST['time_slot_id'];	
	$stmt3 = $conn->prepare("SELECT * FROM room_book WHERE time_slot_id='".$time_slot_id."'"); 
    $stmt3->execute();
	$result3 = $stmt3->fetch();
	} 	
    ?>

	<div class="search">
		<div class="searchbox">
			<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
				<input type="text" class="inpts" name="name" placeholder="Search Teachers" />
				<input type="submit" class="btn" name="t_submit" value="Search Teachers" />
			</form>
			<div class="result">
				<table>
				<?php if($result > 0) { ?>
					<tr>
						<td>Name:</td>
						<td><?php echo $result['name'];?></td>
					</tr>
					<tr>
						<td>Email:</td>
						<td><?php echo $result['email_address'];?></td>
					</tr>
					<tr>
						<td>Department:</td>
						<td><?php echo $result['dept_name'];?></td>
					</tr>
					<tr>
						<td>Taken Courses:</td>
						<td>
						<?php if($result2 > 0) { ?>
						<?php do { ?>
							<?php echo $result2['course_id']; ?> | 
						<?php } while ($result2 = $stmt2->fetch() ); } else { ?>
							No Courses Assigned
						<?php } ?>
						</td>
					</tr>
				<?php } ?>	
					
					
				</table>
			</div>
		</div>
		<div class="searchbox">
			<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
				<input type="text" class="inpts" name="time_slot_id" placeholder="Search Room" />
				<input type="submit" class="btn" name="r_submit" value="Search Room Slot ID" />
			</form>
			<div class="result3">
				<table>
				<?php if($result3 > 0) { ?>
					<tr>
						<td>Day:</td>
						<td><?php echo $result3['day'];?></td>
					</tr>
					<tr>
						<td>Start Time:</td>
						<td><?php echo $result3['Start_time'];?></td>
					</tr>
					<tr>
						<td>Status:</td>
						<td><?php echo $result3['Status'];?></td>
					</tr>
					
				<?php } ?>	
					
					
				</table>
			</div>
		</div>
	</div>



<?php include "inc/footerr.php"; ?>