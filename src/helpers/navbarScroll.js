function scrollFunction () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        return document.getElementById("navbar").className="position-fixed d-flex py-4 bg-white w-100";
    }else{
        return document.getElementById("navbar").className = "position-fixed d-flex py-5  w-100"
    }

}

export default scrollFunction