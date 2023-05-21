// let namaSiswa1 = "Pasa";
// let namaSiswa2 = "euy";
// let namaSiswa3 = "gg";

// console.log(namaSiswa1, namaSiswa2, namaSiswa3);

// let namaSiswa = ["Pasa", "euy", "gg"];

// console.log(namaSiswa);

// // object
// let nama = "pasa";
// let alamat = "civuvur";
// let umur = 24;

// console.log(nama, alamat, umur);

// let dataPersonal1 = {
//   nama: "pasa",
//   alamat: "civuvuur",
//   umur: 22,
// };

// let dataPersonal2 = {
//   nama: "mama",
//   alamat: "jepun",
//   umur: 35,
// };

// let dataPersonal3 = {
//   nama: "wawa",
//   alamat: "zimbabwe",
//   umur: 53,
// };

// console.log(dataPersonal2.nama);

// let dataCaleg = [
//   { nama: "Jokowow", alamat: "Solo" },
//   { nama: "Owo", alamat: "Jaktim" },
// ];

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-blog-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  let iconJs =
    '<img src="assets/icons8-javascript-50.png" alt="" width="30px"/>';
  let iconNode =
    '<img src="assets/icons8-node-js-32.png" alt="" width="30px" />';
  let iconReact = '<img src="assets/icons8-react-30.png" alt="" />';
  let iconSocket =
    '<img src="assets/socket_io_logo_icon_144874.png" alt="" width="30px"/>';

  let checkNode = "<span>Node JS</span>";
  let checkJs = "<span>Javascript</span>";
  let checkSocket = "<span>Socket IO</span>";
  let checkReact = "<span>React JS</span>";

  console.log(checkJs);

  let showTextNode = document.getElementById("tech1").checked ? checkNode : "";
  let showTextJs = document.getElementById("tech2").checked ? checkJs : "";
  let showTextSocket = document.getElementById("tech3").checked
    ? checkSocket
    : "";
  let showTextReact = document.getElementById("tech4").checked
    ? checkReact
    : "";

  let showIconNode = document.getElementById("tech1").checked ? iconNode : "";
  let showIconJS = document.getElementById("tech2").checked ? iconJs : "";
  let showIconSocket = document.getElementById("tech3").checked
    ? iconSocket
    : "";
  let showIconReact = document.getElementById("tech4").checked ? iconReact : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    content,
    image,
    startDate,
    endDate,
    showTextNode,
    showTextJs,
    showTextSocket,
    showTextReact,
    showIconNode,
    showIconJS,
    showIconSocket,
    showIconReact,
  };

  dataBlog.push(blog);
  console.log(blog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${dataBlog[index].image}" alt="" />
    </div>
    <div class="blog-content">
      <div>
        <h3>
          <a href="blog-detail.html" target="_blank"
            >${dataBlog[index].title}</a
          >
        </h3>
        <div class="detail-blog-contain">
          ${dataBlog[index].startDate} - ${dataBlog[index].endDate}
        </div>
        <p>
          ${dataBlog[index].content}
        </p>
      </div>
      <div class="icon-group">
      ${dataBlog[index].showIconNode}
      ${dataBlog[index].showIconJS}
      ${dataBlog[index].showIconReact}
      ${dataBlog[index].showIconSocket}
      </div>
      <div class="btn-group">
        <button class="btn">Edit Post</button>
        <button class="btn">Delete Post</button>
      </div>
    </div>
  </div>`;
  }
}
