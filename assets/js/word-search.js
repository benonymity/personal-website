const preGeneratedGrids = [
  "REGAYJYWRQALNKHVDAGQBVKPLCLCKFMUEXXHATCYVMJHIBBGQSMEOHGISWOMKEEFPYZXVPLHXTTDPSXPZARVZMRHXINVRABXFGQLICFBULQIKVRZNAHOIYQIALNOUMKMGKIQHAWGSVGJLXSGXMKQLYUSDXKGJWZFTLORZAPUTCWZBBRRNAZUYEIZHODOOMLAKFPISRZOUBVHCFPTXKUGWPIEPWYXWUXDCIUEVVGWGIRPNLVAAEABONCSGGGFBSBJKWBGPQWEMSRUJKVSQEKSSODPJKSNCOKTZCUWVIESTUBOUNBQDFFQGEACLBLGTPNTTXTOFQBQVMFGYYEJOKCLQOMKYVBBJLWILLTHNRZRDKWWBVURQJDZIMNTIEKIZOGJYYTWCLIBLTJVKGQL",
  "LEBYMEZLFLJNOSQIXBEKKCOTNYLHRZKWLZGTFNOTOOOYMFUEAOGMZHIYNNCOQPXAUBGHPYCJLJAYLIDTZQZGUPOEXLRCEROTKOMMATBXDDJEEQQEOVYRIFGPHKFEKXBNIMIDBHWBVANWTTIWVYVWSLDOCEKNMXTNJCPHZCKLRDNKWCVFNAREMGPUJHZJJCXTXPIWTZQOKCYYATQVHTJSJWZKIDVEFULCIRUSXCWRKFIFAOTLSUZBRTOLGQUXKGKRCTELPFAHLTTQTZPALCQISPBUOLBEMTETNYRPGEWEDJPSYWXKHCSDQGIHUVONETYAJIGFZCDRUPFOCPBDNGEAYDHFAEWQISPCGFPSTSHSPPHOTOSDJZSKGSSLHCRHKMXTSPGKSEALPIPBVDPY",
  "VCNKZAQQVNBGPUBRHFFAZVMTHZEXJFBNBQOIOKYXACSUDYJBLKGHMOIIXRAGLSJLRVIJPSLQVLGTGITMZIBXFXSGNUQEFFFAJATIHCLPSDPEXDUGYDQTGGADSHJDXFIWARGBKCAUDPJCRAKNMZDYIMMBFRUNXPYKSQFKMAURCSGEVYQUQPELQFITTQWJCHJLVSWFCPCFPJMXCJQZUNIWMAQILSGWFLQKZTEUFADBAGELOMNEJYMYTPCDOKZKNLUTUWXNQMRYSTBHPTKFXCOWMMLZXXMMOMVNGAEEXHJCBCEBXDAYCVFGCSASPCPDOMNYLMGCUTKLHTLJWHHYQWODIVMERDETIDKOPAXQSBPTVALJNJDUITMPYFIPIWVALKUDTYNOCKMQUJLUIJJP",
  "BJHKUOMUJFDCPSBIXAPGCGWHORFXDOYLWMGTQAHTRWLIVKZKXNPIYLWLGKFYYBUIHQMXHGFBSDJPJWHFDYOPPVPIURCBBPBAXEALZEIIQUUBWJUZQUYMTAOVQQSVFUNIOALLEAUOSYBCKWURLYOVWEVHKBUNXFEIBIEQMDDTFNTSFCNAPRMMNWZRVREXERXSHCNTDIOFMUIWGEAEZSVGMDXJKEBWMOTLIAAQASVTOFTGGNFJZVISHORMNRQSZRXTODSPSVLQIMXLJKGNGMZFVSHMABWYUYIAPYELCBIZYFVMQARKMFZENADMQHCZKFKEVILJJAZCYMHFKHPPJAZHKWFUHHDMDRPTBQEMZZRQWLXPSABDAOLBCNRIHQBVDJWGDDOPCDVIRTVDNJDY",
  "MXPWULRGTHMHFHRNKJBJHKBGLIWDCLXRBXTELUKVRUEKYYBIKLULBVPJLLJMSCJPICLHTIGVFKHYVDKTYYFTUIEPMMROAZQOSAPGKCSVLWPHNNDBINIQEYKRVKPTGZOSFLIKSDDTTCVDFTWQUMXLLYKDDLYUEJOLJYMINCNLXSNZQEOUDRASPKZARNMIUEJIGISMOYSASDSOIHAQIOCOGGULIJTDAVXDCXFRWEZXRUGTQQSOISHJHOFMYXJDAZSYBIHGSJTRGWTPZDWZYBEWEVQROONKDNSDCQMCKKMVVLDGFETYPDGMSQASJVQWZRVVWLMWSRCPAARUHYIGUIQAMRIIXKFISTDIULGJMMRZCRPJHUPQYQULAYBUQKSSUAINCTLUOWVAPDMBRAON",
  "LZLEZRDGPFPKERFBLVCYUIMNJAQFZXJVHNPZDYQRPPRBCFUBCRSARZSXQRPBZKNUMPSJJSZRTHPSCEWBJBFYHUOIAPSMRXIQDKZDEXXIRHDHCRWCUEVGEHXNWJAVLPODPZOQCDTNOOWIDYIKAWYAAAZWOCUGNGKAMQWTKMKVHYJYFYJYDXSTWSXFRVYNLNFTQAWSZPIZWCVHKOEKIZZWWICPLEKFLWLLADQUKQLURTCJWZXVAWKHTSCNJWNVDOEKKSUDGNKKUEHQZFINQUOTESHYQWMBCOVNKOEAZGVHSWRDBSVHIORLPGNHHFUODMORWXXUPGMQPCJKAKTDGQKGWFGJGKIQHGLJJONZIWWEFKJIVAPPAOTXHYOMWTMWHQJDTEAHYZLPPEJZMFIN",
  "IZEDVSWTDIGWQXEKICPKCSQYTHZKPRHWTDJFIDDJEMUVWBSDINEWMJKRQOBCLLOXGBHAPLBBNOOIDRVVHPTCCKPLNQAKVJEETYEGQQERLMVGKYDNFXSNGVRCNESMMCWFWPBQABGDAVSXWYEEXAGVXMKUPWISEMFOKARIFEUFABYGMZKTDDAQVYSTNGWNPFMZIFIJVIITVHOISYGTFTCWLJOHAVNONMEHYAUVHYYNCJRRKFONLLSEEVQVMAWEAEUCZXOTJCVITUVBKIJJBWLMWXNAIMNMBIEBSLDJSXPPPDGTKNBEWQUWNUXLPCHORQICLNNXJKBDUWWSHFEJKLRDDQEWEIVQXAEBIYSRXNUETGMVKBUNQCEFSHKUFRRNDPTBIIMYFXRNNRVKZZTA",
  "FNQJIFCTWLPQDBKDVFMASVKZOWDYFRTXFRKPWIBVLRDLCQMUSTUHALGTAAWYXVCSDPXQRUIGCBNLHMRDXHIWMYQXBGXFOLPEKAKVHWAQSGYAQPLGMZHPRQLDGJYQWMUINXPEMMORUPKFOFESFMLYVLLMNJTAYCNTWMKUZWRPOHRUITOUIXWBTEQAGFJKZEHMEOSGTFYQMKAVYLDTQLVKQQKNJEJGGFQEAUPVVBUQXULZIFQJBASJCRSWEDBAOUYHETTOXFBDYOEJAPEETSKIWQXSTFHKTJRLXQGOJQUOTESEESBARFLXPWQAAIOSEGJWYPWHZOEESAVIDYAUSPYCBUSXWKQMAREXTIGSOJMRHXSPECJVMUEGVCLETJGNUQNGXKOAIJRPCPPTGFJH",
  "EKSZLSTJZWZTNJMJTASAAVVZYNOTFQQJBBGJTEPEVAQQXAFSYYPMOXFSTWEFKDGWGDQFUKVTUYZOZKUKJZCQVUQRJGDMAJURSYAYZODQZQLIPGYLOQWLQMKKJHVOZSAEOHHKFEMSJXGOORJCPDONXYOSLXLHUUNHJTFAKPTDWXETKAFUHJNKWPQMSDVSYEVPOMSTCTQERWRDUFFPZXSRVSSDOQADBCNHPPXUYSXNNBGMZJZLNLGZEBFXZSUXABXETNUCQNNJJEJIZMQKCZFOIIMWSMEZFEMIPCQPIDGYQVPMFXXCMOSDWJIDNOIQTZPDQKLRPXUTYDWFVVVWOAVSAXFUKDXWNCVBGAXDBBMBPPNENNWVUMSITUCRRPMQQKDFQJMPTHUUDARIKDOD",
  "ZFKXHWGDMFOBXJTESDSZISYLRFCVHCKCHMPOSIGGWUPEQZIMSVTQLZTTHHOZOSXFKEAIGGEDJOEXQSPRNYBDYHJNJRCIHRIEZIPACFVPUIFAXTKPICGRLIAMZCXSUJTDLYGQSISLFOQUDPXPXFUDSCECUMHYUHCGRLYCYAKIPYMCFWXHCDOTGJMREQWWSYLRJOXILMPQCJNTGSSDCMPGWONGLXBFXDVNDRNKIBVFISWYPUCQONMTWEJFLTNNFSWPASNTSMZHIHEGGRELXDSNAZGNNNORFSFVZAXSIJNHXRUTPXFYIXJHUQELLDWKFGRFIDMENZXMYTFPSDVIWDKZDNCBWTFOOVJSTPLSACLUQMRATZLUJXDADUBFCHLZZBYLTJQFOHYTFAIVRBTY",
];

function displayGrid() {
  const randomIndex = Math.floor(Math.random() * preGeneratedGrids.length);
  const gridString = preGeneratedGrids[randomIndex];
  const size = Math.floor(Math.sqrt(gridString.length));
  const container = document.getElementById("word-search");
  if (container) {
    container.innerHTML = ""; // Clear previous grid if any
    const table = document.createElement("table");

    for (let i = 0; i < size; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < size; j++) {
        const td = document.createElement("td");
        td.textContent = gridString[i * size + j];
        td.addEventListener("click", () => {
          if (!td.classList.contains("selected")) {
            addToDisplay(td.textContent);
            td.classList.add("selected");
          } else {
            removeFromDisplay(td.textContent);
            td.classList.remove("selected");
          }
        });
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    container.appendChild(table);

    // Call resizeGrid initially and add event listener for window resize
    resizeGrid();
    window.addEventListener("resize", resizeGrid);
  }
}

function resizeGrid() {
  const wordSearch = document.getElementById("word-search");
  if (wordSearch) {
    const table = wordSearch.querySelector("table");
    const wordSearchWidth = wordSearch.offsetWidth;
    wordSearch.style.height = `${wordSearchWidth}px`; // Set height equal to width
    const cells = table.getElementsByTagName("td");
    const size = Math.sqrt(cells.length);
    const cellSize = wordSearchWidth / size; // Adjust cellSize calculation
    for (let cell of cells) {
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.fontSize = `${cellSize * 0.6}px`; // Scale font size relative to cell size
    }
    table.style.fontSize = `${cellSize * 0.6}px`; // Set font size for the entire table
  }
}

function addToDisplay(letter) {
  const display = document.getElementById("selected-letters");
  display.textContent += letter;
  document.getElementById("go-button").style.visibility = "visible";
}

function removeFromDisplay(letter) {
  const display = document.getElementById("selected-letters");
  display.textContent = display.textContent.replace(letter, "");
  if (display.textContent === "") {
    document.getElementById("go-button").style.visibility = "hidden";
  }
}

function navigateToLink() {
  const link = document
    .getElementById("selected-letters")
    .textContent.toLowerCase();
  window.location.href = `https://${link}.benbassett.dev`; // Navigate to the subdomain
}

const goButton = document.getElementById("go-button");
if (goButton) {
  goButton.style.visibility = "hidden";
  goButton.addEventListener("click", navigateToLink);
}

// Call displayGrid to show a random word search grid when the page loads or when needed
displayGrid();

// Call resizeGrid on window load and resize events
window.addEventListener("load", resizeGrid);
window.addEventListener("resize", resizeGrid);
