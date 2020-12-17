let tab=[]
for(let i=0;i<=5;i++)
{
    tab[i] = parseInt(prompt(`Podaj wiek ${i+1} osoby`));
    if(tab[i]<=0)
    {
    do
    {
        tab[i] = parseInt(prompt(`Podaj poprawny wiek ${i+1} osoby`));
    }while(tab[i]<=0)
    }

}

let min=tab[0];
let max=0;

for(let i=0;i<=5;i++)
{
    if(tab[i]<min)
    {
        min=tab[i];
    }
    else if(tab[i]>max)
    {
        max=tab[i];
    }
}


document.write(`<br>Najstarsza osoba ma: ${max} lat`);
document.write(`<br>Najmłodsza osoba ma: ${min} lat`);

for(let i=0;i<6-1;i++)
{
    for(let j=0;j<6-1-i;j++)
    {
        if(tab[j+1]<tab[j])
        {
            let x=tab[j+1];
            tab[j+1]=tab[j];
            tab[j]=x;
        }
    }
}

for(let i=0;i<6;i++)
{
    document.write(`${tab[i]} `)
}