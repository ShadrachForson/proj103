const { Button } = require("reactstrap");

        //enables click sound onclick
        function playSound() {
        var sound = document.getElementById("audio");
        sound.play();}
        //shows year in footer
        function showDate(){
        document.getElementById("footer").innerHTML = Date("now");}

        //addition function
        function computeAdd(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        this.id_ = ["addition","subtraction","division","multiplication","modulo","exponent"];

        // loop through array by index
        // if item of array index == id of clicked Button then execute  associated operation

        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ +this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " + " + this.sT_ + " ,thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to add";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term to add ";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" + "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ +this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term to add ";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" + "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ +this.sT_;}}

        //subtration function
        function computeSub(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        
        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ - this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " - " + this.sT_ + " ,thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to subtract";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term to subtract";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" - "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ - this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term to subtract";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" - "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ - this.sT_;}}

         //division function
        function computeDiv(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        
        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ / this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " / " + this.sT_ + " ,thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to divide";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term to divide";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" / "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ / this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term to divide";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" / "+this.sT_;
        let answer = this.fT_ / this.sT_;
         if(answer == Infinity ){
        document.getElementById("result").innerHTML = "Cannot divide by zero";
        } else {document.getElementById("result").innerHTML= answer}}}

        //Multiplication function
        function computeMul(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        
        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ * this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " * " + this.sT_ + ",thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to multiply";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term to multiply";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" * "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ * this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term to multiply";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" * "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ * this.sT_;}}

        //Modulo function
        function computeMod(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        
        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ % this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " % " + this.sT_ + ",thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to compute the remainder";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term to compute remainder";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" % "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ % this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term to compute remainder";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" % "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ % this.sT_;}}

        //Exponent function
        function computeExp(fT_,sT_,id_){
        this.fT_ = parseFloat(document.getElementById("term_1").value);
        this.sT_ = parseFloat(document.getElementById("term_2").value);
        
        if(!isNaN(this.fT_) && !isNaN(this.sT_) ){
        document.getElementById("result").innerHTML = this.fT_ ** this.sT_;
        document.getElementById("remark").innerHTML = "You enterd " + this.fT_ + " ^ " + this.sT_ + ",thus your ";}
        else{document.getElementById("remark").innerHTML = " input first term and second term to compute the exponent";}

        if (isNaN(this.fT_) && !isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input first term (base) to compute exponent";
        this.fT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your first term to be zero, thus <br> "+ this.fT_ +" ^ "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ ** this.sT_;}  
        if (!isNaN(this.fT_) && isNaN(this.sT_)) {
        document.getElementById("remark").innerHTML = " input second term (power/degree) to compute exponent";
        this.sT_ = 0;
        document.getElementById("remark").innerHTML = " QliQulator&trade; assumes your second term to be zero, thus <br> "+ this.fT_ +" ^ "+this.sT_;
        document.getElementById("result").innerHTML = this.fT_ ** this.sT_;}}