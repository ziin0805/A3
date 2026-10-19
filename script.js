/* ================= CẤU HÌNH TRUNG TÂM (chỉnh sửa tại đây) ================= */
const CONFIG = { effects: true, music: { enabled: true, src: "assets/music/song.mp3" } };
// Ảnh chung của lớp: hiện cho tất cả mọi người sau ảnh riêng
const SHARED = [
  { src: "assets/images/shared/photo-1.jpg", caption: "Bắt đầu chặng đường 3 năm cấp 3 cùng những gương mặt hoàn toàn mới.\nMới đó mà đã là học sinh lớp 11 rồi! ✨🌿" },
  { src: "assets/images/shared/photo-2.jpg", caption: "20/10 đầu tiên🌹" },
  { src: "assets/images/shared/photo-3.jpg", caption: "Do là lần đầu tiên chuẩn bị quà nên còn bỡ ngỡ \nchx chuẩn bị đc những món quà chu đáo" },
  { src: "assets/images/shared/photo-4.jpg", caption: "Í chụp vs cô Loan nè💗" },
  { src: "assets/images/shared/photo-5.jpg", caption: "Biết ô Thương không✨" },
  { src: "assets/images/shared/photo-6.jpg", caption: "20/11 của lớp🎨" },
  { src: "assets/images/shared/photo-7.jpg", caption: "trang trí cây thông 'nô em'🎄" },
  { src: "assets/images/shared/photo-8.jpg", caption: "vẽ tranh cổ động phòng chống si đa (HIV)☠️" },
  { src: "assets/images/shared/photo-9.jpg", caption: "no cap vì bí quá ko nói nên lời" },
  { src: "assets/images/shared/photo-10.jpg", caption: "chillllllll🌱" },
  { src: "assets/images/shared/photo-11.jpg", caption: "☝️" },
  { src: "assets/images/shared/photo-12.jpg", caption: "các chàng gái đi chặt tre🎋" },
  { src: "assets/images/shared/photo-13.jpg", caption: "sau n ngày trốn học thì cx lm xong cái gian hàng" },
  { src: "assets/images/shared/photo-14.jpg", caption: "ọc ọc ọc ọc 😋 🍜" },
  { src: "assets/images/shared/photo-15.jpg", caption: "giải nhì gian hànggg" },
  { src: "assets/images/shared/photo-16.jpg", caption: "giải nhất nhảy sạppp" },
  { src: "assets/images/shared/photo-17.jpg", caption: "giải nhất trình diễn trang phục truyền thốnggg" },
  { src: "assets/images/shared/photo-18.jpg", caption: "úi nhất toàn đoàn kìa" },
  { src: "assets/images/shared/photo-19.jpg", caption: "anh sơn cs vẻ mê cái lớp ni" },
  { src: "assets/images/shared/photo-20.jpg", caption: "cái j đỏ chót vạiii" },
  { src: "assets/images/shared/photo-21.jpg", caption: " hmmmmmmmmmmmmmmm" },
  { src: "assets/images/shared/photo-22.jpg", caption: "bonus thêm" },
  { src: "assets/images/shared/photo-23.jpg", caption: "thật ra quên nhét ở trên nên là nhét xún đây" },
  { src: "assets/images/shared/photo-24.jpg", caption: "............." },
  { src: "assets/images/shared/photo-25.jpg", caption: "ba trấm" }
];
// Con đường ký ức: số ảnh hiện ở mỗi lượt (theo thứ tự ảnh trong SHARED). Ví dụ [2,1,2,1] = lượt 1 hiện 2 ảnh, lượt 2 hiện 1 ảnh...
// Ảnh còn dư (nếu tổng chưa đủ) sẽ tự chia mỗi lượt 2 ảnh.
const MEMORY_LAYOUT = [1, 4, 1, 2, 3, 3, 4, 1, 2, 4];
const WISHES = ["Chúc bạn mỗi ngày đều có một lý do để mỉm cười 🌸", "Chúc bạn học tập thuận lợi và luôn vui vẻ ✨", "Chúc bạn thật nhiều sức khỏe và niềm vui 🌷", "Chúc bạn gặp nhiều điều may mắn 🍀"];
/* photos riêng: thêm {src:"assets/images/<id>/photo-1.jpg", caption:"..."} vào mảng photos của từng người.
   id = tên không dấu, nối bằng gạch ngang (xem tên thư mục trong assets/images/) */
const PEOPLE = [
 { name:"Đỗ Nguyễn Như An", pw:"1803", msg:"Chúc An luôn nhẹ nhàng như một ngày nắng đẹp ☀️", letter:"Chào Như An nhé! Nhân ngày 20/10, mình muốn gửi đến cậu vài dòng này. Dù lớp mình lúc nào cũng đông vui và đôi lúc hơi ồn ào, nhưng thực sự nhờ có vai trò lớp phó của cậu mà mọi việc trong lớp luôn được sắp xếp đâu ra đấy. Cảm ơn cậu vì đã luôn âm thầm gánh vác, nhắc nhở tụi mình từng chút một từ việc nhỏ nhất mà không một lời phàn nàn. Sự chu đáo và lo xa của cậu khiến nhiều lúc tụi mình vừa nể vừa thương.\nChúc Như An ngày 20/10 thật nhiều niềm vui, lúc nào cũng cười tươi và bớt lo nghĩ lại nha. Mong rằng chặng đường sắp tới cậu sẽ luôn giữ được sự nhiệt huyết này và có thật nhiều kỷ niệm đẹp với lớp mình!",
   photos:[
    { src:"assets/images/do-nguyen-nhu-an/an.jpg"},
    { src:"assets/images/do-nguyen-nhu-an/an1.jpg"},
    { src:"assets/images/do-nguyen-nhu-an/an2.jpg"}
 ] },
 { name:"Nguyễn Trâm Anh", pw:"2310", msg:"Chúc Trâm Anh mọi điều dịu dàng nhất sẽ tìm đến 🌸", letter:"Trâm Anh ơi, nay 20/10 rồi nè! Tớ viết vài chữ gửi cậu để chúc mừng ngày của một nửa thế giới. Một đứa rất hay cười và lúc nào cũng mang lại năng lượng tích cực cho bàn học xung quanh như cậu thật tuyệt biết bao!\nDạo này việc học hành có căng thẳng lắm không? Cứ bình tĩnh mà chiến đấu nha, có gì khó khăn thì cứ ới bạn bè tiếng.\nChúc Trâm Anh ngày hôm nay nhận được thật nhiều quà, hoa và những lời chúc ngọt ngào nhất. Hy vọng cậu sẽ luôn giữ được nét đáng yêu, năng động này và lúc nào cũng tràn đầy niềm vui trong mỗi buổi đến lớp.",
   photos:[
     { src:"assets/images/nguyen-tram-anh/tramanh.jpg"},
     { src:"assets/images/nguyen-tram-anh/tramanh1.jpg"},
     { src:"assets/images/nguyen-tram-anh/tramanh2.jpg"}
   ] },
 { name:"Hồ Ngọc Hân", pw:"2010", msg:"Chúc Ngọc Hân một ngày 20/10 đúng nghĩa là của riêng bạn 🎀", letter:"Ngọc Hân à, nhân dịp 20/10, tớ chúc cậu có một ngày thật trọn vẹn và nhiều niềm vui bất ngờ nhé. Sự nhẹ nhàng và điềm tĩnh của cậu ở lớp, những lúc giải quyết mọi chuyện khiến ai cũng phải nể ghê luôn.\nCảm ơn vì cậu luôn là một người bạn dễ mến, sẵn sàng lắng nghe khi tụi tớ luyên thuyên đủ thứ chuyện trên đời. Chúc cậu mọi điều tốt lành nhất, học giỏi hơn và luôn giữ vững phong độ nha.\nMong là ngày hôm nay và cả những ngày sau nữa, lúc nào cậu cũng gặp nhiều may mắn và nở nụ cười thật tươi trên môi.", photos:[] },
 { name:"Đinh Ngọc Huệ", pw:"1211", msg:"Chúc Ngọc Huệ luôn tươi tắn như một đóa hoa đầu mùa 🌼", letter:"Đinh Ngọc Huệ ơi! Nhân ngày 20/10, tớ gửi đến cậu lời chúc chân thành nhất nha. Thời gian qua học chung lớp, tuy không phải lúc nào cũng ngồi gần hay nói chuyện nhiều, nhưng sự chăm chỉ và đáng yêu của Huệ luôn tạo niềm vui cho xung quanh.\nCảm ơn cậu vì những lần cùng nhau bàn bài tập hay những lúc lớp có việc chung. Chúc Huệ ngày hôm nay thật rạng rỡ, nhận được nhiều món quà xinh xắn và quan trọng nhất là luôn giữ được tinh thần thoải mái, vui vẻ để cùng tụi mình chinh phục năm học này nhé! Ì hí hihhihhihihihihihihihiihhih", photos:[] },
 { name:"Đặng Thị Hương Lan", pw:"2002", msg:"Chúc Hương Lan luôn thơm ngát những niềm vui nhỏ 💐", letter:"Hương Lan nè, 20/10 tới rồi đó, chúc cậu một ngày lễ thật ý nghĩa và tràn ngập tiếng cười nha. Một cô bạn rất tinh tế và luôn để ý đến cảm xúc của những người xung quanh như Lan thật tuyệt.\nCảm ơn cậu vì sự ấm áp đó đã giúp lớp mình thêm gắn kết hơn. Chúc cậu luôn tự tin vào bản thân, theo đuổi những điều mình thích và đạt kết quả cao trong học tập nhé.\nĐừng áp lực quá nha, có mệt quá thì cứ chậm lại một chút để tận hưởng cuộc sống. Chúc Lan mỗi ngày đến lớp đều là một ngày vui.", photos:[] },
 { name:"Nguyễn Hoàng My", pw:"0205", msg:"Chúc Hoàng My mỗi ngày đến lớp đều thật vui 🎈", letter:"Hoàng My (My Sóiiiiii), nay là 20/10 rồi đấy! Tớ viết chiếc thiệp nhỏ này để chúc cậu có một ngày lễ thật vui vẻ và ngọt ngào. Phong cách năng động và cá tính của cậu ở lớp luôn làm cho không khí lớp mình sôi nổi hẳn lên.\nCảm ơn vì cậu luôn là một phần không thể thiếu của tập thể này. Chúc My Sói luôn giữ được chất riêng, lúc nào cũng rạng rỡ, xinh tươi và gặt hái được thật nhiều thành công trong học tập cũng như cuộc sống nha. Chúc mừng 20/10 cậu nhé!",
   photos:[
    { src:"assets/images/nguyen-hoang-my/hoangmy.jpg"},
    { src:"assets/images/nguyen-hoang-my/hoangmy1.jpg"},
    { src:"assets/images/nguyen-hoang-my/hoangmy2.jpg"}
   ] },
 { name:"Huỳnh Nguyễn Ly Na", pw:"0501", msg:"Chúc Ly Na luôn bình yên và tỏa sáng theo cách riêng 🌙", letter:"Ly Na ơi, 20/10 đến rồi nè, chúc cậu có một ngày lễ thật vui vẻ và ngọt ngào nha! Sự nhanh nhẹn, thân thiện và năng lượng tích cực của cậu luôn khiến mọi người xung quanh cảm thấy vô cùng dễ chịu.\nCảm ơn Ly Na vì đã mang đến thật nhiều tiếng cười cho lớp mình. Chúc cậu ngày hôm nay nhận được thật nhiều hoa, quà và những lời chúc tốt đẹp nhất. Mong rằng chặng đường học tập phía trước của cậu sẽ luôn tràn ngập may mắn và thành công!",
   photos:[
    { src:"assets/images/huynh-nguyen-ly-na/na.jpg"},
    { src:"assets/images/huynh-nguyen-ly-na/na1.jpg"},
   ] },
 { name:"Văn Huỳnh Ngọc Ngân", pw:"0110", msg:"Chúc Ngọc Ngân một ngày 20/10 nhiều quà và nhiều cười 🎁", letter:"Ngọc Ngân ơi, nhân dịp 20/10, tớ muốn gửi lời chúc mừng chân thành nhất đến cậu. Sự dễ thương và những lần mang lại cảm giác dễ chịu cho những ai xung quanh của cậu thật đáng yêu.\nCảm ơn cậu vì sự dịu dàng và những lần giúp đỡ nhỏ nhặt trong lớp nhé. Chúc Ngọc Ngân ngày hôm nay thật nhiều niềm vui, luôn xinh xắn và tràn đầy năng lượng.\nMong rằng chặng đường học tập phía trước của cậu sẽ luôn thuận lợi, làm gì cũng suôn sẻ và đạt được ước mơ mà mình đang ấp ủ nha.", photos:[] },
 { name:"Đào La Như Nguyên", pw:"2804", msg:"Chúc Như Nguyên luôn rạng rỡ và đầy năng lượng 🌞", letter:"Xin chào BÚT PHÁP CỦA LỚP, 20/10 đến rồi nè, tớ chúc cậu có một ngày lễ thật trọn vẹn, ấm áp và ngập tràn niềm vui nha. Sự chăm chỉ, tập trung và quyết tâm rất riêng trong mọi việc của cậu thật đáng nể.\nChúc Như Nguyên luôn giữ vững ngọn lửa nhiệt huyết ấy, học hành suôn sẻ và đạt kết quả thật cao trong năm học này. Mong rằng cậu sẽ luôn vui vẻ, yêu đời và có thêm thật nhiều kỷ niệm đẹp cùng với tụi mình dưới mái trường này nhé!",
   photos:[
    { src:"assets/images/dao-la-nhu-nguyen/nguyen.jpg"},
    { src:"assets/images/dao-la-nhu-nguyen/nguyen2.jpg"},
   ] },
 { name:"Nguyễn Thảo Nguyên", pw:"0203", msg:"Chào Thảo Nguyên! Chúc bạn có một ngày 20/10 thật vui và nhiều bất ngờ 💗", letter:"Chào Thảo Nguyên nhé! Nhân dịp 20/10, tớ muốn gửi lời chúc mừng và sự chào đón chân thành nhất đến cậu.\nThời gian đầu chuyển đến môi trường mới chắc sẽ có chút bỡ ngỡ đúng không? Đừng lo lắng quá nha, mọi người trong lớp cực kỳ thân thiện và luôn sẵn sàng đồng hành cùng cậu đấy.\nChúc Thảo Nguyên sẽ có một ngày lễ thật nhiều kỷ niệm đẹp, nhanh chóng hòa nhập và xem lớp mình như ngôi nhà thứ hai nhé. Cùng nhau cố gắng cho chặng đường sắp tới nha!", photos:[] },
 { name:"Nguyễn Thị Tuyết Nhi", pw:"1211", msg:"Chúc Tuyết Nhi trong trẻo và dịu mát như tuyết đầu mùa ❄️", letter:"(Tuyết Nhi) bo bò bỏ bò bo à, nhân ngày 20/10, tớ chúc cậu luôn vui vẻ, rạng rỡ và gặp thật nhiều điều tốt lành trong cuộc sống. Sự hòa đồng và cách luôn biết tạo bầu không khí vui vẻ cho mọi người xung quanh của Bò thật tuyệt.\nCảm ơn cậu vì những tiếng cười và sự thoải mái khi ở cạnh nhau nhé. Chúc Nhi Bò ngày hôm nay thật đặc biệt, nhận được nhiều quà và hoa.\nMong rằng cậu sẽ luôn giữ được năng lượng tích cực này, học thật giỏi và làm được những điều mình mong muốn nha.", photos:[] },
 { name:"Phạm Huỳnh Khánh Tâm", pw:"0402", msg:"Chúc Khánh Tâm luôn an yên và hạnh phúc 🍃", letter:"Kính gửi lớp “chưởng”! Nhân ngày 20/10, tớ gửi lời chúc và lời cảm ơn chân thành đến cậu nhé.\nLàm lớp trưởng chưa bao giờ là chuyện dễ dàng, tụi tớ hiểu đôi khi cậu phải chịu rất nhiều áp lực từ việc chung cho đến việc quản lý cái lớp \"tăng động\" này. Cảm ơn sự cố gắng, trách nhiệm và tất cả những gì cậu đã âm thầm làm cho tập thể lớp mình.\nChúc Tâm ngày hôm nay được xả hơi trọn vẹn, không phải lo nghĩ gì hết, luôn xinh đẹp, khỏe mạnh và giữ vững bản lĩnh của một người đứng đầu nha. Tụi tớ luôn ủng hộ cậu!",
   photos:[
    { src:"assets/images/pham-huynh-khanh-tam/khanhtam.jpg"},
    { src:"assets/images/pham-huynh-khanh-tam/khanhtam1.jpg"},
    { src:"assets/images/pham-huynh-khanh-tam/khanhtam2.jpg"}
   ] },
 { name:"Trần Anh Thư", pw:"2005", msg:"Chúc Anh Thư mọi trang vở đều đẹp và mọi ngày đều vui 📖", letter:"Anh Thư ơi, nay 20/10 rồi đấy, chúc cậu có một ngày lễ thật ý nghĩa và tràn ngập tiếng cười nha. Sự thông minh cùng những câu nói dí dỏm đôi khi khiến cả bàn được trận cười sảng khoái của Thư chính là điểm nhấn tuyệt vời.\nCảm ơn cậu vì đã mang lại sự vui vẻ cho lớp mình. Chúc Anh Thư luôn giữ được nét cá tính, sự tự tin và gặt hái thật nhiều thành tích cao trong học tập.\nMong rằng mọi dự định của cậu trong thời gian tới đều sẽ thuận buồm xuôi gió và lúc nào cũng vui vẻ thế này nhé!", photos:[] },
 { name:"Hồ Thị Ngọc Trinh", pw:"2302", msg:"Chúc Ngọc Trinh một ngày đẹp như những cánh hoa 🌺", letter:"Ngọc Trinh à, nhân dịp 20/10, tớ gửi đến cậu những lời chúc tốt đẹp nhất nhé. Dù tụi mình ít khi ngồi trò chuyện lâu, nhưng sự hiền lành, dễ thương và chăm chỉ của Trinh luôn gây ấn tượng.\nChúc cậu ngày hôm nay sẽ nhận được thật nhiều hoa, quà và những lời chúc ngọt ngào từ mọi người xung quanh. Mong rằng trong năm học này, cậu sẽ luôn giữ được tinh thần học tập hăng say, lúc nào cũng vui tươi và đạt được những mục tiêu mà bản thân đã đề ra nha.", photos:[] },
 { name:"Nguyễn Hạ Uyên Vân", pw:"2802", msg:"Chúc Uyên Vân nhẹ như mây và vui như nắng hạ ☁️", letter:"Uyên Vân ơi, 20/10 tới rồi, chúc cậu có một ngày lễ thật đáng nhớ và ngập tràn niềm vui nha. Sự nhẹ nhàng, tinh tế và gu thẩm mỹ rất riêng của Uyên Vân luôn thật đặc biệt.\nCảm ơn vì cậu luôn thân thiện và hòa nhã với mọi người trong lớp. Chúc Uyên Vân lúc nào cũng rạng rỡ, tự tin và tràn đầy năng lượng để theo đuổi những điều mình yêu thích.\nMong rằng chặng đường học tập sắp tới của cậu sẽ luôn suôn sẻ, gặt hái được nhiều điểm số thật cao và nhiều kỷ niệm đẹp.",
   photos:[
    { src:"assets/images/nguyen-ha-uyen-van/uyenvan.jpg"},
    { src:"assets/images/nguyen-ha-uyen-van/uyenvan1.jpg"},
    { src:"assets/images/nguyen-ha-uyen-van/uyenvan2.jpg"}
   ] },
 { name:"Đoàn Lưu Tường Vy", pw:"2405", msg:"Chúc Tường Vy luôn rực rỡ như đóa tường vi 🌹", letter:"Tường Vy ơi, nhân ngày Phụ nữ Việt Nam 20/10, tớ chúc cậu luôn xinh đẹp, vui vẻ và gặp nhiều may mắn trong cuộc sống. Năng lượng tích cực và sự nhiệt tình của cậu mỗi khi tham gia các hoạt động chung của lớp thật đáng quý.\nCảm ơn vì cậu đã góp phần làm cho lớp mình thêm phần sôi nổi. Chúc Tường Vy ngày hôm nay nhận được thật nhiều món quà bất ngờ và ý nghĩa.\nMong rằng cậu sẽ luôn giữ vững tinh thần này, học giỏi và luôn là một cô bạn đáng yêu nha.",
   photos:[
    { src:"assets/images/doan-luu-tuong-vy/doanvy.jpg"},
    { src:"assets/images/doan-luu-tuong-vy/doanvy1.jpg"},
   ] },
 { name:"Nguyễn Thị Tường Vy", pw:"0105", msg:"Chúc Tường Vy một ngày 20/10 thật vui và nhiều bất ngờ nhỏ 🎀", letter:"Tường Vy à, nhân dịp 20/10, mình gửi đến cậu lời chúc chân thành nhất nhé. Sự đáng yêu, chăm chỉ và nghiêm túc trong việc học tập của cậu đôi lúc khiến tụi mình phải học tập theo đấy.\nCảm ơn cậu vì luôn là người bạn tốt trong lớp. Chúc Tường Vy ngày hôm nay thật nhiều niềm vui, luôn nở nụ cười tươi trên môi và đạt được những kết quả cao nhất trong các kỳ thi sắp tới.\nMong rằng mọi điều tốt đẹp nhất sẽ đến với cậu trong ngày lễ này cũng như trong cuộc sống!",
   photos:[
    { src:"assets/images/nguyen-thi-tuong-vy/nguyenvy.jpg"},
   ] },
 { name:"Văn Thị Diễm Vy", pw:"0202", msg:"Chúc Diễm Vy lúc nào cũng xinh tươi theo cách của riêng mình 🌸", letter:"Diễm Vy ơi, nhân ngày 20/10, tớ muốn gửi lời chúc mừng chân thành nhất đến cậu. Luôn mang lại cảm giác vui tươi và những ý tưởng hay ho cho các hoạt động của lớp chính là điều tuyệt vời ở cậu.\nCảm ơn sự nhiệt tình và dễ mến của cậu nha. Chúc Diễm Vy ngày hôm nay nhận được thật nhiều hoa và quà, lúc nào cũng cười tươi như hoa và gặp nhiều may mắn.\nMong rằng mọi mong ước của cậu trong cuộc sống đều sẽ trở thành hiện thực và tụi mình sẽ có thật nhiều kỷ niệm đẹp cùng nhau!",
   photos:[
    { src:"assets/images/van-thi-diem-vy/diemvy.jpg"},
    { src:"assets/images/van-thi-diem-vy/diemvy1.jpg"},
   ] },
 { name:"Lê Thị Như Ý", pw:"1402", msg:"Chúc Như Ý mọi điều đều như ý 🍀", letter:"Như Ý ơi, 20/10 đến rồi nè, tớ chúc cậu có một ngày thật trọn vẹn, nhiều niềm vui và bất ngờ thú vị nha. Dù đôi khi tụi mình ít nói chuyện nhưng sự ngoan hiền và thân thiện của Như Ý luôn rất đáng quý.\nCảm ơn cậu luôn giữ được nét dễ thương ấy, lúc nào cũng tràn đầy sức sống và tự tin trên con đường mình chọn. Mong rằng năm học này sẽ mang lại cho cậu thật nhiều kỷ niệm đẹp bên bạn bè và thầy cô.\nChúc mừng ngày 20/10 thật ý nghĩa nhé!",
   photos:[
    { src:"assets/images/le-thi-nhu-y/nhuy.jpg"},
   ] },
 { name:"Nguyễn Ngọc Hải Yến", pw:"2209", msg:"Chúc Hải Yến bay thật cao và vui thật xa 🕊️", letter:"Hải Yến à, nay là 20/10 rồi đấy, chúc cậu có một ngày lễ thật ngọt ngào và ngập tràn hạnh phúc nha. Sự điềm đạm, chu đáo và tinh thần luôn sẵn sàng giúp đỡ bạn bè xung quanh của Yến thật đáng quý.\nCảm ơn vì cậu đã luôn là một mảnh ghép dễ thương trong tập thể lớp mình. Chúc Hải Yến luôn giữ được sự dịu dàng, tự tin và đạt kết quả thật cao trong học tập nhé.\nMong rằng những gì tốt đẹp nhất sẽ đến với cậu hôm nay và trong cả chặng đường phía trước.",
   photos:[
    { src:"assets/images/nguyen-ngoc-hai-yen/haiyen.jpg"},
    { src:"assets/images/nguyen-ngoc-hai-yen/haiyen1.jpg"},
   ] },
 { name:"Nguyễn Thị Ngọc Hiền", pw:"2610", call:"cô Hiền", msg:"Chúc cô luôn dồi dào sức khỏe, hạnh phúc và thật nhiều niềm vui trong ngày 20/10 💐", letter:"Kính gửi cô Nguyễn Thị Ngọc Hiền,\nNhân dịp Ngày Phụ nữ Việt Nam 20/10, thay mặt cho tập thể lớp, em xin gửi đến cô lời chúc mừng chân thành và sâu sắc nhất. Chúc cô luôn dồi dào sức khỏe, luôn giữ vững ngọn lửa đam mê với nghề và luôn hạnh phúc trong cuộc sống.\nThời gian qua được đồng hành cùng cô trong vai trò giáo viên chủ nhiệm, tụi em thấu hiểu và trân trọng biết bao tâm huyết cũng như sự quan tâm mà cô dành cho lớp. Tụi em vẫn hay đùa với nhau là cô \"giàu nứt vách\" — giàu từ tình cảm, sự hào sảng cho tới năng lượng tích cực lúc nào cũng tràn trề dành cho học sinh. Mỗi lần lớp bắt đầu nhồng nhồng lên hay tính làm trò gì quậy phá là cô lại nhắc \"Đừng có manh động!\", nghe vừa buồn cười vừa thương cô ghê gớm.\nCó những lúc tụi em còn vô tâm, chưa ngoan, khiến cô phải phiền lòng, nhưng qua những lời dạy bảo ấy, tụi em càng thêm kính trọng sự kiên nhẫn và tấm lòng bao la của cô. Cô không chỉ dẫn dắt tụi em trên con đường tri thức mà còn dạy tụi em cách sống sao cho trọn vẹn, biết yêu thương và có trách nhiệm hơn.\nEm và các bạn hứa sẽ cố gắng đoàn kết hơn, bớt \"manh động\" lại, chăm ngoan và tiến bộ từng ngày để cô yên tâm và tự hào về tập thể lớp mình.\nMột lần nữa, em xin kính chúc cô có một ngày 20/10 thật nhiều niềm vui, tràn ngập hoa tươi và nhận được nhiều điều ngọt ngào nhất!",
   photos:[
    { src:"assets/images/nguyen-thi-ngoc-hien/ngochien.jpg"},
    { src:"assets/images/nguyen-thi-ngoc-hien/ngochien1.jpg"},
    { src:"assets/images/nguyen-thi-ngoc-hien/ngochien2.jpg"},
    { src:"assets/images/nguyen-thi-ngoc-hien/ngochien3.jpg"},
    { src:"assets/images/nguyen-thi-ngoc-hien/ngochien4.jpg"}
   ] }
];
/* ================= LOGIC ================= */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const flat = s => s.normalize("NFC").trim().replace(/\s+/g, " ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
const rnd = a => a[Math.floor(Math.random() * a.length)];
let calm = false; // true = tắt hiệu ứng (nút ✨ góc phải dưới)
let tapFn = null, tapAt = 0, me = null, timers = [], audio = null;
const later = (f, t) => timers.push(setTimeout(f, t));
const slug = n => n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase().trim().replace(/\s+/g, "-");
// ---- Tải ảnh nhẹ: hiển thị bằng thumb (assets/thumbs/*.webp), ảnh gốc chỉ tải khi phóng to ----
const thumbOf = src => src.replace(/^assets\/images\//, "assets/thumbs/").replace(/\.[^./]+$/, ".webp");
const tryDecode = (img, url) => { img.src = url; return img.decode().then(() => true, () => false); };
// Trả về <img> đã GIẢI MÃ xong (null nếu lỗi). Thiếu thumb -> tự rơi về ảnh gốc.
async function loadImg(src, alt = "") {
  const img = new Image(); img.alt = alt; img.decoding = "async";
  if (await tryDecode(img, thumbOf(src))) return img;
  if (await tryDecode(img, src)) return img;
  return null;
}
const imgCache = new Map(); // src -> Promise<img>, để nạp trước trang kế tiếp
const getImg = p => { if (!imgCache.has(p.src)) imgCache.set(p.src, loadImg(p.src, p.caption || "")); return imgCache.get(p.src); };
function openLB(src) { // mở thumb ngay, rồi thay bằng ảnh gốc khi đã giải mã xong
  const im = $("#lb img"); im.dataset.want = src; im.onerror = () => { im.onerror = null; im.src = src; };
  im.src = thumbOf(src); $("#lb").hidden = false;
  const full = new Image(); full.src = src;
  full.decode().then(() => { if (im.dataset.want === src) im.src = src; }, () => {});
}
// kiểm tra file có tồn tại mà KHÔNG tải cả ảnh (HEAD); file:// không hỗ trợ thì dò bằng Image
const probe = src => fetch(src, { method: "HEAD" })
  .then(r => r.ok && /^image\//.test(r.headers.get("content-type") || ""))
  .catch(() => new Promise(r => { const i = new Image(); i.onload = () => r(true); i.onerror = () => r(false); i.src = src; }));
// tự dò ảnh riêng: assets/images/<id>/photo-1.jpg, photo-2.jpg... (jpg/jpeg/png/webp)
async function ownPhotos() {
  if (me.photos.length) return []; // đã khai báo ảnh riêng ở PEOPLE thì khỏi dò (đỡ hàng chục request 404)
  const out = [], EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "PNG", "JPEG"];
  for (let n = 1; n <= 15; n++) {
    const base = `assets/images/${slug(me.name)}/photo-${n}`;
    const hits = await Promise.all(EXTS.map(e => probe(`${base}.${e}`).then(ok => ok && `${base}.${e}`)));
    const ok = hits.find(Boolean);
    if (!ok) break;
    out.push({ src: ok, caption: (me.captions && me.captions[n - 1]) || `Khoảnh khắc đáng nhớ của ${first()} 🌷` });
  }
  return out;
}
// nạp + giải mã toàn bộ ảnh (ảnh chung theo thứ tự, rồi ảnh riêng), 4 ảnh song song để không nghẽn máy
function preloadAll() {
  const list = [...SHARED, ...me.photos]; let k = 0;
  const worker = async () => { while (k < list.length) await getImg(list[k++]); };
  for (let w = 0; w < 4; w++) worker();
}
const first = () => me.call || me.name.split(" ").pop();

// nền: cánh hoa trôi (số lượng cố định, CSS infinite)
const LOW = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4; // máy yếu -> bớt hạt nền
if (CONFIG.effects) {
  $("#bg").innerHTML = Array.from({ length: LOW ? 5 : 10 }, () => `<i style="left:${Math.random() * 100}%;font-size:${14 + Math.random() * 14}px;animation-duration:${14 + Math.random() * 12}s;animation-delay:-${Math.random() * 20}s">${rnd(["🌸", "💗", "✨", "🌷"])}</i>`).join("") + Array.from({ length: LOW ? 3 : 6 }, () => `<b style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:-${Math.random() * 3}s"></b>`).join("");
}
function confetti(n = 30, set = ["🎉", "🌸", "💗", "✨", "🌷"]) {
  return; // đã tắt hiệu ứng rơi xuống (confetti)
  for (let k = 0; k < n; k++) {
    const e = document.createElement("i");
    e.textContent = rnd(set); e.style.left = Math.random() * 100 + "%"; e.style.fontSize = 14 + Math.random() * 14 + "px"; e.style.animationDelay = Math.random() * .6 + "s";
    $("#fx").appendChild(e); setTimeout(() => e.remove(), 3200);
  }
}
// bản đồ hành trình
const ICONS = ["🌱", "🌷", "📸", "💗", "🎁", "💌"], STEP = { map0: 0, garden: 1, memory: 2, heart: 3, gift: 4, wish: 4, letter: 5, end: 5 };
const setTap = (f, msg = "Chạm vào màn hình để tiếp tục") => { tapFn = f; tapAt = Date.now(); $("#hint").textContent = msg; $("#hint").hidden = !f; };
function go(id) {
  timers.forEach(clearTimeout); timers = []; setTap(null);
  $$(".scene").forEach(s => s.classList.toggle("active", s.id === id));
  const m = $("#map"); m.hidden = !(id in STEP);
  if (id in STEP) m.innerHTML = ICONS.map((ic, i) => `<span class="${i <= STEP[id] ? "on" : ""}">${ic}</span>`).join("");
  (init[id] || (() => {}))(); scrollTo(0, 0);
}
$$("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go === "map" ? "map0" : b.dataset.go)));

const init = {
  intro() { $("#envIntro").classList.remove("opening"); setTap(() => $("#startBtn").click(), "Chạm vào màn hình để bắt đầu ✨"); },
  login() { $("#form").reset(); $("#err").textContent = ""; },
  map0() { $("#hello").textContent = `Chào ${me.name} 💗`; setTap(() => go("garden"), "Chạm để đi tiếp 🌱"); },
  garden() { $("#flower").classList.remove("bloom"); $("#wishTxt").textContent = ""; },
  memory() {
    const pages = []; let s = 0, i = 0;
    for (const n of MEMORY_LAYOUT) { if (s >= SHARED.length) break; pages.push(SHARED.slice(s, s + n)); s += n; }
    while (s < SHARED.length) { pages.push(SHARED.slice(s, s + 2)); s += 2; }
    let shown = 0;
    const preload = j => pages[j] && pages[j].forEach(getImg); // nạp + giải mã sẵn trang kế tiếp
    const show = async () => {
      const token = ++shown, w = $("#polaWrap"); $("#cap").textContent = "";
      const imgs = await Promise.all(pages[i].map(getImg)); // đợi giải mã xong mới dựng -> animation không bị giật
      if (token !== shown) return;
      w.innerHTML = "";
      pages[i].forEach((p, k) => {
        const d = document.createElement("figure"); d.className = "pola" + (pages[i].length === 1 ? " solo" : ""); d.style.animationDelay = k * 0.25 + "s";
        let img = imgs[k];
        if (!img) { img = document.createElement("div"); img.className = "ph"; img.textContent = "📷 Chưa tìm thấy ảnh: " + p.src; }
        const c = document.createElement("figcaption"); c.textContent = p.caption;
        d.append(img, c); w.appendChild(d);
      });
      $("#cnt").textContent = `${pages.slice(0, i + 1).flat().length} / ${SHARED.length}`;
      preload(i + 1);
    };
    let prev = $("#mPrev"); const next = $("#mNext");
    if (!prev) { // phòng khi index.html cũ chưa có nút Quay lại
      const row = document.createElement("div"); row.className = "row";
      prev = document.createElement("button"); prev.id = "mPrev"; prev.className = "btn alt"; prev.textContent = "◀ Quay lại";
      next.before(row); row.append(prev, next);
    }
    [prev, next].forEach(b => b.style.setProperty("display", "inline-block", "important")); // phòng khi style.css cũ còn ẩn nút
    const sync = () => { prev.disabled = i === 0; next.textContent = i + 1 < pages.length ? "Xem tiếp ▶" : "Tiếp tục 💗"; };
    prev.onclick = () => { if (i > 0) { i--; sync(); show(); } };
    next.onclick = () => { if (i + 1 < pages.length) { i++; sync(); show(); } else go("heart"); };
    sync(); show();
  },
  heart() {
    const f = $("#field"); f.innerHTML = ""; $("#hMsg").textContent = ""; $("#hNext").hidden = true;
    const sp = Math.floor(Math.random() * 8);
    for (let k = 0; k < 8; k++) {
      const b = document.createElement("button"); b.textContent = k === sp ? "💖" : rnd(["🤍", "🩷", "💜", "🤍"]);
      b.style.left = (k % 4) * 23 + Math.random() * 8 + "%"; b.style.top = Math.floor(k / 4) * 120 + 20 + Math.random() * 50 + "px"; b.style.animationDelay = -Math.random() * 3 + "s";
      b.setAttribute("aria-label", "Trái tim");
      if (k === sp) b.className = "sp";
      b.onclick = () => {
        if (k !== sp) { b.classList.add("shake"); $("#hMsg").textContent = "Chưa phải rồi, thử trái tim đang lấp lánh nhé 😉"; return; }
        b.classList.add("found"); confetti(36); $("#hMsg").textContent = me.msg; setTap(() => go("gift"), "Chạm để mở hộp quà 🎁");
      };
      f.appendChild(b);
    }
  },
  gift() { $("#box").className = ""; $("#gTxt").textContent = ""; $("#gOpen").hidden = false; setTap(() => $("#gOpen").click(), "Chạm vào màn hình để mở quà 🎁"); },
  wish() {
    const L = ["Chúc mừng Ngày Phụ nữ Việt Nam 20/10", me.name, `Lời chúc dành riêng cho ${first()} 💗`, me.msg];
    $("#lines").innerHTML = "";
    L.forEach((t, k) => { const p = document.createElement("p"); p.textContent = t; if (k < 2) p.className = "t"; p.style.animationDelay = 0.2 + k * 0.45 + "s"; $("#lines").appendChild(p); });
    confetti(20, ["🌸", "✨", "💗"]); setTap(() => go("letter"), "Chạm để mở thư bí mật 💌");
  },
  async letter() {
    $("#env").classList.remove("open"); $("#paper").hidden = true; $("#lNext").hidden = true; $("#pics").innerHTML = ""; setTap(() => $("#env").click(), "Chạm vào màn hình để mở thư 💌");
    const who = me, own = await ownPhotos(); if (me !== who) return;
    const list = [...me.photos, ...own.filter(o => !me.photos.some(p => p.src === o.src))];
    const imgs = await Promise.all(list.map(getImg)); if (me !== who) return;
    imgs.forEach((im, k) => {
      if (!im) return;
      const p = list[k], f = document.createElement("figure"), c = document.createElement("figcaption");
      c.textContent = p.caption || "";
      im.onclick = () => openLB(p.src);
      f.style.animationDelay = 1 + $("#pics").children.length * 0.3 + "s"; f.append(im, c); $("#pics").appendChild(f);
    });
  },
  end() { $("#endTxt").textContent = `Chúc ${me.name} luôn vui vẻ, hạnh phúc và có thật nhiều kỷ niệm đẹp!`; confetti(20, ["🌸", "🌷"]); }
};
// các sự kiện
$("#startBtn").onclick = () => { $("#envIntro").classList.add("opening"); confetti(14, ["✨"]); later(() => go("login"), 800); };
$("#form").onsubmit = e => {
  e.preventDefault();
  const n = flat($("#uName").value), p = $("#uPw").value.trim();
  const found = PEOPLE.find(x => flat(x.name) === n && x.pw === p);
  if (!found) { $("#err").textContent = "Tên hoặc ngày sinh chưa khớp, bạn thử lại nhé 🌷"; $("#form").classList.remove("shake"); void $("#form").offsetWidth; $("#form").classList.add("shake"); return; }
  me = found; preloadAll(); confetti(30); // nạp sẵn TOÀN BỘ ảnh ngay sau khi đăng nhập
  $("#err").textContent = `Xin chào ${me.name} 💗`;
  later(() => go("map0"), 900);
};
$("#flower").onclick = () => { if ($("#flower").classList.contains("bloom")) { go("memory"); return; } $("#flower").classList.add("bloom"); $("#wishTxt").textContent = rnd(WISHES); confetti(18, ["🌸"]); setTap(() => go("memory"), "Chạm để tiếp tục 📸"); };
$("#gOpen").onclick = () => {
  const b = $("#box"); setTap(null); b.classList.add("shake"); $("#gOpen").hidden = true;
  later(() => { b.classList.add("open"); confetti(45); $("#gTxt").textContent = `Chúc mừng 20/10, ${first()}! 🌷`; setTap(() => go("wish"), "Chạm để tiếp tục ✨"); }, 1000); later(() => go("wish"), 2200);
};
$("#env").onclick = () => {
  setTap(null); $("#env").classList.add("open"); const p = $("#paper"); confetti(40, ["🌸", "✨", "💗"]); $("#lt").innerHTML = ""; me.letter.split("\n").forEach((t, k) => { const q = document.createElement("p"); q.textContent = t; q.style.animationDelay = 0.6 + k * 0.5 + "s"; $("#lt").appendChild(q); }); p.classList.remove("reveal");
  later(() => { p.hidden = false; void p.offsetWidth; p.classList.add("reveal"); setTap(() => go("end"), "Chạm để tiếp tục 🌷"); }, 600);
};
$("#replay").onclick = () => go("gift");
$("#restart").onclick = () => { me = null; go("intro"); };
$("#lb").onclick = () => $("#lb").hidden = true;
$("#fxBtn").onclick = () => { calm = !calm; document.body.classList.toggle("calm", calm); $("#fxBtn").textContent = calm ? "💤" : "✨"; };
document.addEventListener("click", e => {
  if (!tapFn || Date.now() - tapAt < 400 || e.target.closest("button,input,form,#lb,#pics")) return;
  tapFn();
});
// nhạc nền: nạp sẵn ngay khi mở web, thử phát luôn; nếu trình duyệt chặn thì phát ở lần chạm/bấm phím đầu tiên
const MUSIC_EVS = ["pointerdown", "keydown", "touchend"];
function startMusic() {
  if (!CONFIG.music.enabled) return;
  if (!audio) { audio = new Audio(CONFIG.music.src); audio.loop = true; audio.volume = 0.6; audio.preload = "metadata"; }
  const done = () => MUSIC_EVS.forEach(ev => removeEventListener(ev, startMusic));
  if (audio.paused) audio.play().then(done, () => {}); else done();
}
startMusic();
MUSIC_EVS.forEach(ev => addEventListener(ev, startMusic));
go("intro");
