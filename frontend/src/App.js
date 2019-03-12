import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Row, Col,Container, FormCheck } from 'react-bootstrap';
import RestaurantBox from './RestaurantBox';
import RestaurantPage from './RestaurantPage';

class App extends Component {
  
	constructor(props){
		super(props);
		this.state = {

			restaurants:[	{"name":"Waly","imgURL":"http://www.touchegolfschool.com/images/golf_school/1.jpg","webURL":"http://cnn.com/cum/sociis/natoque/penatibus/et.html?primis=sagittis&in=nam&faucibus=congue&orci=risus&luctus=semper&et=porta&ultrices=volutpat&posuere=quam&cubilia=pede&curae=lobortis&donec=ligula&pharetra=sit&magna=amet&vestibulum=eleifend&aliquet=pede&ultrices=libero&erat=quis&tortor=orci&sollicitudin=nullam&mi=molestie&sit=nibh&amet=in&lobortis=lectus&sapien=pellentesque&sapien=at&non=nulla&mi=suspendisse&integer=potenti&ac=cras&neque=in&duis=purus&bibendum=eu&morbi=magna&non=vulputate&quam=luctus&nec=cum&dui=sociis&luctus=natoque&rutrum=penatibus&nulla=et&tellus=magnis&in=dis&sagittis=parturient&dui=montes&vel=nascetur&nisl=ridiculus&duis=mus&ac=vivamus&nibh=vestibulum&fusce=sagittis&lacus=sapien&purus=cum&aliquet=sociis&at=natoque&feugiat=penatibus&non=et&pretium=magnis&quis=dis&lectus=parturient&suspendisse=montes&potenti=nascetur&in=ridiculus&eleifend=mus&quam=etiam&a=vel&odio=augue&in=vestibulum&hac=rutrum&habitasse=rutrum&platea=neque&dictumst=aenean&maecenas=auctor&ut=gravida&massa=sem&quis=praesent&augue=id&luctus=massa&tincidunt=id&nulla=nisl&mollis=venenatis&molestie=lacinia&lorem=aenean&quisque=sit&ut=amet&erat=justo&curabitur=morbi&gravida=ut&nisi=odio&at=cras&nibh=mi&in=pede&hac=malesuada","hours":"12:41 PM","address":"0501 Dennis Court","phone":"434-987-8603","price":4,"rating":3},
				{"name":"Eolanda","imgURL":"http://www.touchegolfschool.com/images/golf_school/2.jpg","webURL":"http://nsw.gov.au/semper/interdum/mauris.aspx?cursus=quis&urna=libero&ut=nullam&tellus=sit&nulla=amet&ut=turpis&erat=elementum&id=ligula&mauris=vehicula&vulputate=consequat&elementum=morbi&nullam=a","hours":"10:21 AM","address":"19837 Elka Trail","phone":"106-242-4119","price":3,"rating":5},
				{"name":"Kerk","imgURL":"http://www.touchegolfschool.com/images/golf_school/3.jpg","webURL":"http://bbb.org/tempus/sit.jsp?viverra=imperdiet&pede=sapien&ac=urna&diam=pretium&cras=nisl&pellentesque=ut&volutpat=volutpat&dui=sapien&maecenas=arcu&tristique=sed&est=augue&et=aliquam&tempus=erat&semper=volutpat&est=in&quam=congue&pharetra=etiam&magna=justo&ac=etiam&consequat=pretium&metus=iaculis&sapien=justo&ut=in&nunc=hac&vestibulum=habitasse&ante=platea&ipsum=dictumst&primis=etiam&in=faucibus&faucibus=cursus&orci=urna&luctus=ut&et=tellus&ultrices=nulla&posuere=ut&cubilia=erat&curae=id&mauris=mauris&viverra=vulputate&diam=elementum","hours":"2:54 AM","address":"433 Elmside Lane","phone":"597-117-9512","price":2,"rating":4},
				{"name":"Conan","imgURL":"http://www.touchegolfschool.com/images/golf_school/4.jpg","webURL":"http://hostgator.com/ante/vestibulum/ante/ipsum/primis.jsp?pellentesque=pellentesque&at=volutpat","hours":"10:58 PM","address":"109 Daystar Park","phone":"538-955-0276","price":2,"rating":3},
				{"name":"Bale","imgURL":"http://dummyimage.com/240x202.jpg/cc0000/ffffff","webURL":"https://unc.edu/eget/vulputate/ut/ultrices/vel.aspx?proin=vestibulum&interdum=ante&mauris=ipsum&non=primis&ligula=in&pellentesque=faucibus&ultrices=orci&phasellus=luctus&id=et&sapien=ultrices&in=posuere&sapien=cubilia&iaculis=curae&congue=duis&vivamus=faucibus&metus=accumsan&arcu=odio&adipiscing=curabitur&molestie=convallis&hendrerit=duis&at=consequat&vulputate=dui&vitae=nec&nisl=nisi&aenean=volutpat&lectus=eleifend&pellentesque=donec&eget=ut&nunc=dolor&donec=morbi&quis=vel&orci=lectus&eget=in&orci=quam&vehicula=fringilla&condimentum=rhoncus&curabitur=mauris&in=enim&libero=leo&ut=rhoncus&massa=sed&volutpat=vestibulum&convallis=sit&morbi=amet&odio=cursus&odio=id&elementum=turpis&eu=integer&interdum=aliquet&eu=massa&tincidunt=id&in=lobortis&leo=convallis&maecenas=tortor&pulvinar=risus&lobortis=dapibus&est=augue&phasellus=vel&sit=accumsan&amet=tellus&erat=nisi&nulla=eu&tempus=orci&vivamus=mauris&in=lacinia&felis=sapien&eu=quis&sapien=libero&cursus=nullam&vestibulum=sit&proin=amet&eu=turpis&mi=elementum&nulla=ligula&ac=vehicula&enim=consequat&in=morbi&tempor=a&turpis=ipsum&nec=integer&euismod=a&scelerisque=nibh&quam=in&turpis=quis&adipiscing=justo&lorem=maecenas&vitae=rhoncus&mattis=aliquam&nibh=lacus&ligula=morbi&nec=quis&sem=tortor&duis=id&aliquam=nulla&convallis=ultrices&nunc=aliquet&proin=maecenas&at=leo","hours":"10:45 PM","address":"0424 Lakewood Parkway","phone":"558-590-2242","price":1,"rating":2},
				{"name":"Francesca","imgURL":"http://dummyimage.com/155x119.bmp/5fa2dd/ffffff","webURL":"https://godaddy.com/maecenas/tristique.aspx?id=pretium&ornare=iaculis&imperdiet=diam&sapien=erat&urna=fermentum&pretium=justo&nisl=nec&ut=condimentum&volutpat=neque&sapien=sapien&arcu=placerat&sed=ante&augue=nulla&aliquam=justo&erat=aliquam&volutpat=quis&in=turpis&congue=eget&etiam=elit&justo=sodales&etiam=scelerisque&pretium=mauris&iaculis=sit&justo=amet&in=eros&hac=suspendisse&habitasse=accumsan&platea=tortor&dictumst=quis&etiam=turpis&faucibus=sed&cursus=ante&urna=vivamus&ut=tortor&tellus=duis&nulla=mattis&ut=egestas&erat=metus&id=aenean&mauris=fermentum&vulputate=donec&elementum=ut&nullam=mauris&varius=eget&nulla=massa&facilisi=tempor&cras=convallis&non=nulla&velit=neque&nec=libero&nisi=convallis&vulputate=eget&nonummy=eleifend&maecenas=luctus&tincidunt=ultricies&lacus=eu&at=nibh&velit=quisque&vivamus=id&vel=justo&nulla=sit&eget=amet&eros=sapien&elementum=dignissim&pellentesque=vestibulum&quisque=vestibulum&porta=ante&volutpat=ipsum&erat=primis&quisque=in&erat=faucibus&eros=orci&viverra=luctus&eget=et&congue=ultrices&eget=posuere&semper=cubilia&rutrum=curae&nulla=nulla&nunc=dapibus&purus=dolor&phasellus=vel&in=est&felis=donec&donec=odio&semper=justo&sapien=sollicitudin&a=ut&libero=suscipit&nam=a&dui=feugiat&proin=et&leo=eros&odio=vestibulum&porttitor=ac&id=est","hours":"5:29 AM","address":"1 Pearson Parkway","phone":"209-416-3750","price":1,"rating":3},
				{"name":"Omar","imgURL":"http://dummyimage.com/187x194.png/dddddd/000000","webURL":"http://usatoday.com/ut/erat/curabitur/gravida.png?rutrum=lacinia&nulla=nisi&tellus=venenatis&in=tristique&sagittis=fusce&dui=congue&vel=diam&nisl=id&duis=ornare&ac=imperdiet&nibh=sapien&fusce=urna&lacus=pretium&purus=nisl&aliquet=ut&at=volutpat&feugiat=sapien&non=arcu&pretium=sed&quis=augue&lectus=aliquam&suspendisse=erat&potenti=volutpat&in=in&eleifend=congue&quam=etiam&a=justo&odio=etiam&in=pretium&hac=iaculis&habitasse=justo&platea=in&dictumst=hac&maecenas=habitasse&ut=platea&massa=dictumst&quis=etiam&augue=faucibus&luctus=cursus&tincidunt=urna&nulla=ut&mollis=tellus&molestie=nulla&lorem=ut&quisque=erat&ut=id&erat=mauris&curabitur=vulputate&gravida=elementum&nisi=nullam&at=varius&nibh=nulla&in=facilisi&hac=cras&habitasse=non&platea=velit&dictumst=nec&aliquam=nisi&augue=vulputate&quam=nonummy&sollicitudin=maecenas&vitae=tincidunt&consectetuer=lacus&eget=at&rutrum=velit&at=vivamus&lorem=vel&integer=nulla&tincidunt=eget&ante=eros&vel=elementum&ipsum=pellentesque&praesent=quisque&blandit=porta&lacinia=volutpat&erat=erat&vestibulum=quisque&sed=erat&magna=eros&at=viverra","hours":"1:17 PM","address":"96638 Dayton Terrace","phone":"356-405-4167","price":1,"rating":4},
				{"name":"Sterling","imgURL":"http://dummyimage.com/176x156.jpg/ff4444/ffffff","webURL":"https://google.it/sem.html?posuere=nisl&cubilia=nunc&curae=rhoncus&duis=dui&faucibus=vel&accumsan=sem&odio=sed&curabitur=sagittis&convallis=nam&duis=congue&consequat=risus&dui=semper&nec=porta&nisi=volutpat&volutpat=quam&eleifend=pede&donec=lobortis&ut=ligula&dolor=sit&morbi=amet&vel=eleifend&lectus=pede&in=libero&quam=quis&fringilla=orci&rhoncus=nullam&mauris=molestie&enim=nibh&leo=in&rhoncus=lectus&sed=pellentesque&vestibulum=at&sit=nulla&amet=suspendisse&cursus=potenti&id=cras&turpis=in&integer=purus&aliquet=eu&massa=magna&id=vulputate&lobortis=luctus&convallis=cum&tortor=sociis&risus=natoque&dapibus=penatibus&augue=et&vel=magnis&accumsan=dis&tellus=parturient&nisi=montes&eu=nascetur&orci=ridiculus&mauris=mus&lacinia=vivamus&sapien=vestibulum&quis=sagittis&libero=sapien&nullam=cum&sit=sociis&amet=natoque&turpis=penatibus&elementum=et&ligula=magnis&vehicula=dis&consequat=parturient&morbi=montes&a=nascetur&ipsum=ridiculus&integer=mus&a=etiam&nibh=vel&in=augue&quis=vestibulum&justo=rutrum&maecenas=rutrum&rhoncus=neque&aliquam=aenean&lacus=auctor&morbi=gravida&quis=sem&tortor=praesent&id=id&nulla=massa&ultrices=id&aliquet=nisl&maecenas=venenatis&leo=lacinia&odio=aenean&condimentum=sit&id=amet&luctus=justo&nec=morbi&molestie=ut&sed=odio&justo=cras&pellentesque=mi","hours":"9:00 PM","address":"8817 Stone Corner Plaza","phone":"597-564-7893","price":3,"rating":2},
				{"name":"Manuel","imgURL":"http://dummyimage.com/176x156.jpg/ff4444/ffffff","webURL":"http://pen.io/ligula/pellentesque/ultrices/phasellus/id/sapien/in.aspx?donec=diam&dapibus=vitae&duis=quam&at=suspendisse&velit=potenti&eu=nullam&est=porttitor&congue=lacus&elementum=at&in=turpis&hac=donec&habitasse=posuere&platea=metus&dictumst=vitae&morbi=ipsum&vestibulum=aliquam&velit=non&id=mauris&pretium=morbi&iaculis=non&diam=lectus&erat=aliquam&fermentum=sit&justo=amet&nec=diam&condimentum=in&neque=magna&sapien=bibendum&placerat=imperdiet&ante=nullam&nulla=orci&justo=pede&aliquam=venenatis&quis=non&turpis=sodales&eget=sed&elit=tincidunt&sodales=eu&scelerisque=felis&mauris=fusce&sit=posuere&amet=felis&eros=sed&suspendisse=lacus&accumsan=morbi&tortor=sem&quis=mauris&turpis=laoreet&sed=ut&ante=rhoncus&vivamus=aliquet&tortor=pulvinar&duis=sed&mattis=nisl&egestas=nunc&metus=rhoncus&aenean=dui&fermentum=vel&donec=sem&ut=sed&mauris=sagittis&eget=nam&massa=congue&tempor=risus&convallis=semper","hours":"6:13 AM","address":"2939 Hintze Pass","phone":"949-290-2735","price":4,"rating":2},
				{"name":"Davide","imgURL":"http://dummyimage.com/176x156.jpg/ff4444/ffffff","webURL":"http://studiopress.com/et/ultrices/posuere/cubilia.jpg?bibendum=purus&felis=aliquet&sed=at&interdum=feugiat&venenatis=non&turpis=pretium&enim=quis&blandit=lectus&mi=suspendisse&in=potenti&porttitor=in&pede=eleifend&justo=quam&eu=a&massa=odio&donec=in&dapibus=hac&duis=habitasse&at=platea&velit=dictumst&eu=maecenas&est=ut&congue=massa&elementum=quis&in=augue&hac=luctus&habitasse=tincidunt&platea=nulla&dictumst=mollis&morbi=molestie&vestibulum=lorem&velit=quisque&id=ut&pretium=erat&iaculis=curabitur&diam=gravida&erat=nisi&fermentum=at&justo=nibh&nec=in&condimentum=hac&neque=habitasse&sapien=platea&placerat=dictumst&ante=aliquam&nulla=augue&justo=quam&aliquam=sollicitudin&quis=vitae&turpis=consectetuer&eget=eget&elit=rutrum&sodales=at&scelerisque=lorem&mauris=integer&sit=tincidunt&amet=ante&eros=vel&suspendisse=ipsum&accumsan=praesent&tortor=blandit&quis=lacinia&turpis=erat&sed=vestibulum&ante=sed&vivamus=magna&tortor=at&duis=nunc&mattis=commodo&egestas=placerat&metus=praesent&aenean=blandit&fermentum=nam&donec=nulla&ut=integer&mauris=pede&eget=justo&massa=lacinia&tempor=eget","hours":"4:53 AM","address":"953 Lukken Junction","phone":"603-580-0661","price":4,"rating":5},
				{"name":"Rochette","imgURL":"http://dummyimage.com/130x127.jpg/cc0000/ffffff","webURL":"http://livejournal.com/felis/sed/interdum/venenatis/turpis/enim/blandit.jsp?molestie=natoque&lorem=penatibus&quisque=et&ut=magnis&erat=dis&curabitur=parturient&gravida=montes&nisi=nascetur&at=ridiculus&nibh=mus&in=vivamus&hac=vestibulum&habitasse=sagittis&platea=sapien&dictumst=cum&aliquam=sociis&augue=natoque&quam=penatibus&sollicitudin=et&vitae=magnis&consectetuer=dis&eget=parturient&rutrum=montes&at=nascetur&lorem=ridiculus&integer=mus&tincidunt=etiam&ante=vel&vel=augue&ipsum=vestibulum&praesent=rutrum&blandit=rutrum&lacinia=neque&erat=aenean&vestibulum=auctor&sed=gravida&magna=sem&at=praesent&nunc=id&commodo=massa&placerat=id&praesent=nisl&blandit=venenatis&nam=lacinia&nulla=aenean&integer=sit&pede=amet&justo=justo&lacinia=morbi&eget=ut&tincidunt=odio&eget=cras&tempus=mi&vel=pede&pede=malesuada&morbi=in&porttitor=imperdiet&lorem=et&id=commodo&ligula=vulputate&suspendisse=justo&ornare=in&consequat=blandit&lectus=ultrices&in=enim&est=lorem&risus=ipsum&auctor=dolor&sed=sit&tristique=amet&in=consectetuer&tempus=adipiscing&sit=elit&amet=proin&sem=interdum&fusce=mauris&consequat=non&nulla=ligula&nisl=pellentesque","hours":"3:40 PM","address":"61872 Lien Center","phone":"183-824-5830","price":3,"rating":1},
				{"name":"Mic","imgURL":"http://dummyimage.com/182x135.bmp/ff4444/ffffff","webURL":"https://gmpg.org/molestie/hendrerit/at/vulputate/vitae/nisl.jsp?congue=dui&elementum=luctus&in=rutrum&hac=nulla","hours":"11:04 AM","address":"5 Meadow Ridge Park","phone":"200-648-9417","price":2,"rating":2},
				{"name":"Felipe","imgURL":"http://dummyimage.com/122x103.bmp/dddddd/000000","webURL":"https://msn.com/volutpat/quam/pede/lobortis/ligula/sit/amet.jsp?a=orci&pede=luctus&posuere=et&nonummy=ultrices&integer=posuere&non=cubilia&velit=curae&donec=nulla&diam=dapibus&neque=dolor&vestibulum=vel&eget=est&vulputate=donec&ut=odio&ultrices=justo&vel=sollicitudin&augue=ut&vestibulum=suscipit&ante=a&ipsum=feugiat&primis=et&in=eros&faucibus=vestibulum&orci=ac&luctus=est&et=lacinia&ultrices=nisi&posuere=venenatis&cubilia=tristique&curae=fusce&donec=congue&pharetra=diam&magna=id&vestibulum=ornare&aliquet=imperdiet&ultrices=sapien&erat=urna&tortor=pretium&sollicitudin=nisl&mi=ut&sit=volutpat&amet=sapien&lobortis=arcu&sapien=sed&sapien=augue&non=aliquam&mi=erat&integer=volutpat&ac=in&neque=congue&duis=etiam&bibendum=justo&morbi=etiam&non=pretium&quam=iaculis&nec=justo&dui=in&luctus=hac&rutrum=habitasse&nulla=platea&tellus=dictumst&in=etiam&sagittis=faucibus&dui=cursus&vel=urna&nisl=ut&duis=tellus&ac=nulla&nibh=ut&fusce=erat&lacus=id&purus=mauris&aliquet=vulputate&at=elementum&feugiat=nullam&non=varius&pretium=nulla&quis=facilisi&lectus=cras&suspendisse=non","hours":"3:26 PM","address":"09 Dayton Terrace","phone":"135-837-6797","price":3,"rating":2},
				{"name":"Clerc","imgURL":"http://dummyimage.com/129x165.jpg/dddddd/000000","webURL":"http://amazon.de/eget/rutrum/at/lorem/integer/tincidunt.json?leo=gravida&rhoncus=nisi&sed=at&vestibulum=nibh&sit=in&amet=hac&cursus=habitasse&id=platea&turpis=dictumst&integer=aliquam&aliquet=augue&massa=quam&id=sollicitudin&lobortis=vitae&convallis=consectetuer&tortor=eget&risus=rutrum&dapibus=at&augue=lorem&vel=integer&accumsan=tincidunt&tellus=ante&nisi=vel&eu=ipsum&orci=praesent&mauris=blandit&lacinia=lacinia&sapien=erat&quis=vestibulum&libero=sed&nullam=magna&sit=at&amet=nunc&turpis=commodo&elementum=placerat&ligula=praesent&vehicula=blandit&consequat=nam&morbi=nulla&a=integer&ipsum=pede&integer=justo&a=lacinia&nibh=eget&in=tincidunt&quis=eget&justo=tempus&maecenas=vel&rhoncus=pede&aliquam=morbi&lacus=porttitor&morbi=lorem&quis=id&tortor=ligula&id=suspendisse&nulla=ornare&ultrices=consequat&aliquet=lectus&maecenas=in&leo=est&odio=risus&condimentum=auctor&id=sed&luctus=tristique&nec=in&molestie=tempus&sed=sit&justo=amet&pellentesque=sem&viverra=fusce&pede=consequat&ac=nulla&diam=nisl&cras=nunc&pellentesque=nisl&volutpat=duis&dui=bibendum&maecenas=felis&tristique=sed&est=interdum&et=venenatis&tempus=turpis&semper=enim&est=blandit&quam=mi&pharetra=in&magna=porttitor&ac=pede&consequat=justo&metus=eu&sapien=massa&ut=donec&nunc=dapibus&vestibulum=duis&ante=at&ipsum=velit&primis=eu&in=est","hours":"5:40 AM","address":"88 Ridge Oak Street","phone":"674-323-4744","price":1,"rating":1},
				{"name":"Johna","imgURL":"http://dummyimage.com/154x243.jpg/dddddd/000000","webURL":"https://macromedia.com/morbi/odio/odio/elementum/eu/interdum.aspx?lacinia=suspendisse&aenean=accumsan&sit=tortor&amet=quis&justo=turpis&morbi=sed&ut=ante&odio=vivamus&cras=tortor&mi=duis&pede=mattis&malesuada=egestas&in=metus&imperdiet=aenean&et=fermentum&commodo=donec&vulputate=ut&justo=mauris&in=eget&blandit=massa&ultrices=tempor&enim=convallis&lorem=nulla&ipsum=neque&dolor=libero&sit=convallis&amet=eget&consectetuer=eleifend&adipiscing=luctus&elit=ultricies&proin=eu&interdum=nibh&mauris=quisque&non=id&ligula=justo&pellentesque=sit&ultrices=amet&phasellus=sapien&id=dignissim&sapien=vestibulum&in=vestibulum&sapien=ante&iaculis=ipsum&congue=primis&vivamus=in&metus=faucibus&arcu=orci&adipiscing=luctus&molestie=et&hendrerit=ultrices&at=posuere&vulputate=cubilia&vitae=curae&nisl=nulla&aenean=dapibus&lectus=dolor&pellentesque=vel&eget=est&nunc=donec&donec=odio&quis=justo&orci=sollicitudin&eget=ut&orci=suscipit&vehicula=a&condimentum=feugiat&curabitur=et&in=eros","hours":"5:01 PM","address":"227 Redwing Street","phone":"190-652-7944","price":3,"rating":3}
			],
			isSearchDisplayed: true,
			selectedRestaurant: 0

		}
		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.displayRestaurant=this.displayRestaurant.bind(this);
		this.changeView= this.changeView.bind(this);
		this.back=this.back.bind(this);
	}
	changeView(i){
		this.setState({
			...this.state,
			isSearchDisplayed: false,
			selectedRestaurant: i
		});
	}

	back(){
		this.setState({
			...this.state,
			isSearchDisplayed: true,
		});
	}

	eachRestaurant(restaurant,i){
		return (
			<div onClick={this.changeView.bind(this, i)}>
				<RestaurantBox
					key={i}
					index={i}
					name = {restaurant.name}
					imgURL = {restaurant.imgURL}
					webURL = {restaurant.webURL}
					hours = {restaurant.hours}
					address = {restaurant.address}
					phone = {restaurant.phone}
					price = {restaurant.price}
					rating = {restaurant.rating}
					changeView = {this.changeView}>
				</RestaurantBox>
			</div>
		)
	}

	displayRestaurant(i){
		console.log(this.state.restaurants)
		console.log(i)
		console.log(this.state.restaurants[i])
		return (
			<RestaurantPage
			key={i}
			index={i}
			name = {this.state.restaurants[i].name}
			imgURL = {this.state.restaurants[i].imgURL}
			webURL = {this.state.restaurants[i].webURL}
			hours = {this.state.restaurants[i].hours}
			address = {this.state.restaurants[i].address}
			phone = {this.state.restaurants[i].phone}
			price = {this.state.restaurants[i].price}
			rating = {this.state.restaurants[i].rating}
			>
			</RestaurantPage>
		)
	}
	
  render() {
    return (
	<>
	<Navbar bg="light" expand="lg">
	  <Navbar.Brand href="#home">Restaurant Finder</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="#home">Home</Nav.Link>
	      <Nav.Link href="#link">Link</Nav.Link>
	      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
	        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
	        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
	        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
	        <NavDropdown.Divider />
	        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
	      </NavDropdown>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
	<Jumbotron>
		<h1 className="h1">
			Restaurant Finder
		</h1>
	</Jumbotron>
	<Form className="searchBar">
		<Row className="justify-content-xs-center">
			<Col className={this.state.isSearchDisplayed?"d-none":""}>
				<Button variant="warning" onClick={this.back}>Back</Button>
			</Col>
			<Col xs={{ span: 7, offset: 0}} lg={{ span: 4, offset: 0}}>
				<FormControl type="text" placeholder="Search" />
			</Col>
			<Col>
				<Button variant="outline-success" className="searchButton">Search</Button>
			</Col>
			<Col>
				<NavDropdown title="Filters" id="basic-nav-dropdown">
					<Form>
						<FormCheck label="Filter 1" id="Filter1" className="ml-2"/>
						<FormCheck label="Filter 2" id="Filter2" className="ml-2"/>
						<FormCheck label="Filter 3" id="Filter3" className="ml-2"/>
						<FormCheck label="Filter 4" id="Filter4" className="ml-2"/>
						<FormCheck label="Filter 5" id="Filter5" className="ml-2"/>
						<FormCheck label="Filter 6" id="Filter6" className="ml-2"/>
					</Form>
	      		</NavDropdown>
			</Col>
		</Row>
	</Form>
	<Container>
		{this.state.isSearchDisplayed? this.state.restaurants.map(this.eachRestaurant):this.displayRestaurant(this.state.selectedRestaurant)}
	</Container>
	</>
    );
  }
}

export default App;
