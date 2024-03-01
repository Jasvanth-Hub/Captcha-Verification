
let captchaText = document.getElementById("captchaText")

let captchaEnter = document.getElementById("captchaEnter")

let btn1 = document.getElementById("btn1")

let btn2 = document.getElementById("btn2")

let char = "1234567890ABCjklDEFm1234567890noGdefH1234567890IpqrJKLstuMNOghivwxP1234567890QRyzSTabc1234567890UVWXYZ"

captchaText.innerText=`f8U5W`



btn1.addEventListener("click",function refresh()
{

    let a = Math.floor(Math.random()*92)

    let b = Math.floor(Math.random()*92)
    
    let c = Math.floor(Math.random()*92)

    let d = Math.floor(Math.random()*92)
    
    let e = Math.floor(Math.random()*62)
    

    captchaText.innerText=`${char[a]}${char[b]}${char[c]}${char[d]}${char[e]}`

    captchaEnter.value = ""

    captchaEnter.setAttribute("placeholder","Captcha ...")

})





btn2.addEventListener("click",function check()
{

    if(captchaEnter.value=="")
    {
        captchaEnter.setAttribute("placeholder","Please enter the captcha ...")
    }
    else
    {
        if(captchaEnter.value==captchaText.innerText)
        {
            alert("Captcha Validation Successfull ...")
            captchaEnter.value = ""
        }
        else
        {
            alert("captcha didn't match")

            captchaEnter.value = ""
        }
        
        captchaEnter.setAttribute("placeholder","Captcha ...")
    }

    
})