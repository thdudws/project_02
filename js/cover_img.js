
//cover box 이미지 변경
let img_array = [["img/fashion1.jpg","img/fashion2.jpg",
        "img/fashion3.jpg"], 
        ["img/beauty1.jpg","img/beauty2.jpg",
        "img/beauty3.jpg"],
        ["img/cover1.jpg","img/cover2.jpg",
        "img/cover3.jpg"],
        ["img/wedding1.jpg","img/wedding2.jpg",
        "img/wedding3.jpg"]];

        let index = 0;

        function slide(){
            for(let i in img_array){
                document['cover'+i].src = img_array[i][index];
            }
    
            index++;
            if(index>=img_array[0].length){
                index=0;
            }
                        
        }

        setInterval(slide,1700);