const min = document.getElementById("min");
const sec = document.getElementById("sec");
const container = document.getElementById("container");




    let m = +localStorage.getItem('min');
    let s = +localStorage.getItem('sec');
    // localStorage.setItem(m) 
    // localStorage.setItem(s) 
    let timer;
    let almashtir = eval(localStorage.getItem('almash'));
    let b;

    const minutKirit = (e) =>{
        b = e.target.value;
        if(b < 60 && b > -1){
            min.innerHTML = b;
            m = min.innerHTML;
            localStorage.setItem('min', m);
        } 
        if(b == '' || b > 60)return;
    }
    
    
    const ulash = (n) =>{
        if(n == 0) return '0'+ n;
        if (n < 10) return '0'+ n;
        else return n;
    }
    
    const ChangeUI = () => {
        min.innerHTML = ulash(m);
        sec.innerHTML = ulash(s);
        localStorage.setItem('min', m);
        localStorage.setItem('sec', s);
        
    }
    ChangeUI();
    
    const AlmashtirF = (Minut) =>{
        if(almashtir){
            if(Minut) m = 4;
            container.classList.remove("bg-danger");
            container.classList.add("bg-success");
        }
        else{
            console.log('false');
            if(Minut) m = 24;
            container.classList.remove("bg-success");
            container.classList.add("bg-danger");
        }
    }
    AlmashtirF(false);
    
    const  start = () =>{
        if(!timer){
            timer = setInterval(()=>{
                
                
                if(s == 0){
                    m--;
                    s = 59;
                }
                s--;
                
                if(m == -1){
                    almashtir = !almashtir;
                    AlmashtirF(true);
                    localStorage.setItem('almash', almashtir);
                    
                    
                }
                
                ChangeUI();
                
            }, 1000)
    }
    }

    const stop = ()=>{
        clearInterval(timer);
        timer = !timer;
    }
    
   

    const sana = document.getElementById('sana');
    const date = new Date()

    let kun = date.getDate();
    let oy = date.getMonth()+1;
    let yil = date.getFullYear();

    sana.innerHTML = `${yil}.${oy}.${kun}`