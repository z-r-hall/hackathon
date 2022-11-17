const cohortmates = [
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0419JZ8M6V-841fa766c704-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U044QAE6ZED-89c8dffd6add-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U040PL0FHU1-be33bd420450-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U042KQZLJ6M-dc77e7c063a6-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U048Y8XJUET-26086e7df8cc-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U03UWKZ3E7Q-2af8350519c5-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U043XE3K2UF-241c32655839-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U045CSZ8PCG-989f06b2a0d6-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0435R7RNKD-6994f7408236-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U042R16SHTN-3c74faf840aa-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0405A2H1K2-1621423baf81-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U040W0NK6M7-4a59ce2361dd-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U042X4FRKU0-23748528bbe9-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0448T80P4M-dbbd0754f973-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U03UYQMV4SY-b176b8dd5e65-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U044EMMFR8C-761fbdd8a1fb-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0464EA2FJL-67c349a71c30-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0419JJ1UNM-baa6a6fac704-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U040VNF0A4D-fff14b170309-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U03V27E9ULC-15093a7db1d0-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U04440C5T4G-0c970f7c932f-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U043NRMR0U8-1a1b88f28499-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U042T6U4UP3-73dc28b0f05b-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U044GN3HYDC-069f8f181831-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U0409KHHCG7-2c321044b735-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U04359X041W-57fa0df392ba-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U044QTVFA5R-acd10f0fdddd-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U042SHSHP1C-769f0a87d58f-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U040XEN3BEF-27cdc8f980d9-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U047ACQEJHY-5876b7ca1fb6-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U04488SG3FF-91bb30bcbd61-512',
  'https://ca.slack-edge.com/T03ULEJ5TK7-U03UVNRGPJ6-ac1d8b2829a0-512',
];

document.addEventListener('DOMContentLoaded', () => {
  fetchFunc();
});

document.addEventListener('scroll', () => {
  fetchFunc();
});

function fetchFunc(){
fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
  .then((data) => data.json())
    .then((data) => {
      change(data);
    });
}

function change(data) {
  // fetchFunc();
  data = data.quote;
  let content = document.querySelectorAll('span');
  for (const ele of content) {
    let card = ele;
    let j = 0;
    if (ele.innerHTML === 'promoted') {
      while(j < 5) {
        card = card.parentNode;
        j++;
      }
      const redditMan = document.querySelector('._1tvdSTbdxaK-BnUbzUIqIY')
      redditMan.innerHTML = 'CODESMITH';
      redditMan.style.fontWeight = "600"
      redditMan.style.fontSize = "35px"
      redditMan.style.backgroundColor = "white";
      redditMan.style.textAlign = "center"
      redditMan.style.justifyContent = "center"
      const img2 = document.createElement('img');
      redditMan.style.borderBottom = '5px solid navy'
      redditMan.style.paddingBottom = '10px'
      redditMan.style.paddingTop = '10px'
      img2.setAttribute('src', 'https://www.codesmith.io/hubfs/raw_assets/public/codesmith-website/images/codesmith-logo.png');
      redditMan.append(img2)
      redditMan.style.height = "auto"
      img2.style.width = "5%"
      img2.style.marginLeft = "20px"

      const span = document.createElement('span');
      span.style.marginLeft = "20px"
      span.innerHTML = 'Cohort 36 & 37'
      redditMan.append(span);

      // const span2 = document.createElement('span');
      // span2.style.marginLeft = "20px"
      // span2.innerHTML = 'Cohort 36'
      // redditMan.append(span2);
      
      const img = document.createElement('img');
      img.setAttribute('src', `${cohortmates[Math.floor(Math.random()*32)]}`);
      card.innerHTML = `Cohorts 36 & 37 say: ${data}`;
      card.appendChild(img);
      card.style.textAlign = "center";
      card.style.color = "black";
      card.style.fontSize = "24px";
      card.style.fontFamily = "times new roman";
      img.style.marginTop = "10px";
      img.style.border = "5px solid navy"
      img.style.borderRadius = "15px";
      card.style.margin = "25px 0 25px 0";
    }
  }
}

