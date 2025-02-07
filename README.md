# 🛡️ Crusader Kings 3 DNA Beautifier ⚔️  

A **dark medieval-themed** web tool for **enhancing and processing Crusader Kings 3 Persistent DNA**. This tool **makes characters look younger, slows aging, and enhances their appearance** (*beauty is subjective, but you can modify the settings to match your personal preferences*).
---

## **📜 Features**
✅ **DNA Processing** - Converts CK3 DNA input into a more beautiful.  
✅ **Clipboard Integration** - Supports **paste & copy**.
✅ **Fast & Lightweight** - No unnecessary dependencies.  

---

## **🌍 Live Demo**  
You can access the **public page** here:  
🔗 **[Crusader Kings 3 DNA Beautifier](https://guga06436.github.io/ck3-dna-beautifier/)**  

---

## **📂 Project Structure**
```
/ck3-dna-beautifier
│── /css
│   ├── styles.css       # Main UI styles
│── /js
│   ├── main.js          # Handles UI interactions (copy, paste, process)
│───├── /Dna
│       ├── DnaConfig.js     # Stores DNA-related configuration
│       ├── DnaProcessor.js  # Processes DNA text
│── index.html          # Main UI structure
│── README.md           # Documentation
```

---

## **🚀 Installation & Usage**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/ck3-dna-beautifier.git
cd ck3-dna-beautifier
```

### **2️⃣ Open the `index.html` Locally**  
You can open the file `index.html` in your browser:  
```bash
open index.html   # MacOS
xdg-open index.html   # Linux
start index.html   # Windows
```

### **3️⃣ Paste & Beautify CK3 DNA**
- **Paste** your DNA string in the **input box**.
- Click **"Beautify DNA"** to process it.
- **Copy** the structured DNA output.

---

## **📜 Example Input**
### **🔹 Input:**
```
TODO_choose_portait_key={
	type=female
	id=0
	random_seed=0
	age=0.405000
	genes={ 		hair_color={ 207 255 4 241 }
 		skin_color={ 112 147 107 145 }
 		eye_color={ 79 58 59 251 }
 		gene_chin_forward={ "chin_forward_neg" 127 "chin_forward_neg" 101 }
 		gene_chin_height={ "chin_height_neg" 123 "chin_height_neg" 117 }
 		gene_chin_width={ "chin_width_pos" 127 "chin_width_neg" 127 }
 		gene_eye_angle={ "eye_angle_neg" 91 "eye_angle_pos" 129 }
 		gene_eye_depth={ "eye_depth_neg" 121 "eye_depth_neg" 122 }
 		gene_eye_height={ "eye_height_neg" 125 "eye_height_neg" 117 }
 		gene_eye_distance={ "eye_distance_pos" 130 "eye_distance_neg" 118 }
 		gene_eye_shut={ "eye_shut_neg" 115 "eye_shut_neg" 124 }
 		gene_forehead_angle={ "forehead_angle_pos" 124 "forehead_angle_neg" 103 }
 		gene_forehead_brow_height={ "forehead_brow_height_pos" 134 "forehead_brow_height_neg" 107 }
 		gene_forehead_roundness={ "forehead_roundness_pos" 130 "forehead_roundness_pos" 163 }
 		gene_forehead_width={ "forehead_width_pos" 124 "forehead_width_pos" 143 }
 		gene_forehead_height={ "forehead_height_neg" 128 "forehead_height_neg" 30 }
 		gene_head_height={ "head_height_pos" 132 "head_height_neg" 82 }
 		gene_head_width={ "head_width_pos" 132 "head_width_neg" 103 }
 		gene_head_profile={ "head_profile_neg" 128 "head_profile_neg" 127 }
 		gene_head_top_height={ "head_top_height_neg" 123 "head_top_height_neg" 116 }
 		gene_head_top_width={ "head_top_width_pos" 130 "head_top_width_pos" 229 }
 		gene_jaw_angle={ "jaw_angle_neg" 118 "jaw_angle_pos" 131 }
 		gene_jaw_forward={ "jaw_forward_neg" 124 "jaw_forward_neg" 120 }
 		gene_jaw_height={ "jaw_height_pos" 137 "jaw_height_neg" 106 }
 		gene_jaw_width={ "jaw_width_pos" 132 "jaw_width_pos" 153 }
 		gene_mouth_corner_depth={ "mouth_corner_depth_pos" 128 "mouth_corner_depth_neg" 126 }
 		gene_mouth_corner_height={ "mouth_corner_height_neg" 116 "mouth_corner_height_neg" 106 }
 		gene_mouth_forward={ "mouth_forward_neg" 132 "mouth_forward_pos" 134 }
 		gene_mouth_height={ "mouth_height_pos" 130 "mouth_height_neg" 116 }
 		gene_mouth_width={ "mouth_width_neg" 131 "mouth_width_neg" 125 }
 		gene_mouth_upper_lip_size={ "mouth_upper_lip_size_neg" 165 "mouth_upper_lip_size_pos" 194 }
 		gene_mouth_lower_lip_size={ "mouth_lower_lip_size_pos" 131 "mouth_lower_lip_size_pos" 138 }
 		gene_mouth_open={ "mouth_open_neg" 94 "mouth_open_neg" 78 }
 		gene_neck_length={ "neck_length_neg" 105 "neck_length_pos" 132 }
 		gene_neck_width={ "neck_width_neg" 79 "neck_width_pos" 137 }
 		gene_bs_cheek_forward={ "cheek_forward_pos" 0 "cheek_forward_pos" 22 }
 		gene_bs_cheek_height={ "cheek_height_pos" 121 "cheek_height_pos" 49 }
 		gene_bs_cheek_width={ "cheek_width_neg" 0 "cheek_width_pos" 22 }
 		gene_bs_ear_angle={ "ear_angle_pos" 61 "ear_angle_neg" 76 }
 		gene_bs_ear_inner_shape={ "ear_inner_shape_pos" 41 "ear_inner_shape_pos" 25 }
 		gene_bs_ear_bend={ "ear_upper_bend_pos" 112 "ear_lower_bend_pos" 37 }
 		gene_bs_ear_outward={ "ear_outward_neg" 1 "ear_outward_neg" 117 }
 		gene_bs_ear_size={ "ear_size_pos" 10 "ear_size_pos" 123 }
 		gene_bs_eye_corner_depth={ "eye_corner_depth_pos" 191 "eye_corner_depth_pos" 188 }
 		gene_bs_eye_fold_shape={ "eye_fold_shape_pos" 197 "eye_fold_shape_pos" 65 }
 		gene_bs_eye_size={ "eye_size_neg" 15 "eye_size_neg" 10 }
 		gene_bs_eye_upper_lid_size={ "eye_upper_lid_size_pos" 1 "eye_upper_lid_size_pos" 11 }
 		gene_bs_forehead_brow_curve={ "forehead_brow_curve_neg" 94 "forehead_brow_curve_neg" 113 }
 		gene_bs_forehead_brow_forward={ "forehead_brow_forward_pos" 22 "forehead_brow_forward_pos" 7 }
 		gene_bs_forehead_brow_inner_height={ "forehead_brow_inner_height_pos" 47 "forehead_brow_inner_height_neg" 50 }
 		gene_bs_forehead_brow_outer_height={ "forehead_brow_outer_height_neg" 14 "forehead_brow_outer_height_pos" 102 }
 		gene_bs_forehead_brow_width={ "forehead_brow_width_neg" 49 "forehead_brow_width_pos" 40 }
 		gene_bs_jaw_def={ "jaw_def_neg" 122 "jaw_def_pos" 122 }
 		gene_bs_mouth_lower_lip_def={ "mouth_lower_lip_def_pos" 61 "mouth_lower_lip_def_pos" 64 }
 		gene_bs_mouth_lower_lip_full={ "mouth_lower_lip_full_pos" 77 "mouth_lower_lip_full_neg" 91 }
 		gene_bs_mouth_lower_lip_pad={ "mouth_lower_lip_pad_neg" 27 "mouth_lower_lip_pad_neg" 152 }
 		gene_bs_mouth_lower_lip_width={ "mouth_lower_lip_width_neg" 27 "mouth_lower_lip_width_pos" 28 }
 		gene_bs_mouth_philtrum_def={ "mouth_philtrum_def_pos" 30 "mouth_philtrum_def_pos" 137 }
 		gene_bs_mouth_philtrum_shape={ "mouth_philtrum_shape_pos" 60 "mouth_philtrum_shape_pos" 10 }
 		gene_bs_mouth_philtrum_width={ "mouth_philtrum_width_pos" 7 "mouth_philtrum_width_neg" 7 }
 		gene_bs_mouth_upper_lip_def={ "mouth_upper_lip_def_pos" 46 "mouth_upper_lip_def_pos" 41 }
 		gene_bs_mouth_upper_lip_full={ "mouth_upper_lip_full_neg" 109 "mouth_upper_lip_full_pos" 84 }
 		gene_bs_mouth_upper_lip_profile={ "mouth_upper_lip_profile_pos" 68 "mouth_upper_lip_profile_pos" 0 }
 		gene_bs_mouth_upper_lip_width={ "mouth_upper_lip_width_neg" 13 "mouth_upper_lip_width_pos" 25 }
 		gene_bs_nose_forward={ "nose_forward_neg" 0 "nose_forward_neg" 9 }
 		gene_bs_nose_height={ "nose_height_pos" 117 "nose_height_neg" 30 }
 		gene_bs_nose_length={ "nose_length_pos" 0 "nose_length_neg" 68 }
 		gene_bs_nose_nostril_height={ "nose_nostril_height_neg" 0 "nose_nostril_height_neg" 13 }
 		gene_bs_nose_nostril_width={ "nose_nostril_width_neg" 0 "nose_nostril_width_pos" 41 }
 		gene_bs_nose_profile={ "nose_profile_hawk" 127 "nose_profile_pos" 111 }
 		gene_bs_nose_ridge_angle={ "nose_ridge_angle_pos" 0 "nose_ridge_angle_neg" 12 }
 		gene_bs_nose_ridge_width={ "nose_ridge_width_neg" 255 "nose_ridge_width_pos" 7 }
 		gene_bs_nose_size={ "nose_size_pos" 112 "nose_size_pos" 4 }
 		gene_bs_nose_tip_angle={ "nose_tip_angle_neg" 0 "nose_tip_angle_neg" 86 }
 		gene_bs_nose_tip_forward={ "nose_tip_forward_pos" 0 "nose_tip_forward_pos" 6 }
 		gene_bs_nose_tip_width={ "nose_tip_width_pos" 0 "nose_tip_width_neg" 62 }
 		face_detail_cheek_def={ "cheek_def_01" 0 "cheek_def_01" 12 }
 		face_detail_cheek_fat={ "cheek_fat_01_neg" 0 "cheek_fat_01_neg" 224 }
 		face_detail_chin_cleft={ "chin_dimple" 0 "chin_dimple" 10 }
 		face_detail_chin_def={ "chin_def_neg" 2 "chin_def" 173 }
 		face_detail_eye_lower_lid_def={ "eye_lower_lid_def" 0 "eye_lower_lid_def" 250 }
 		face_detail_eye_socket={ "eye_socket_color_02" 0 "eye_socket_color_03" 217 }
 		face_detail_nasolabial={ "nasolabial_03" 0 "nasolabial_01" 48 }
 		face_detail_nose_ridge_def={ "nose_ridge_def_pos" 1 "nose_ridge_def_pos" 7 }
 		face_detail_nose_tip_def={ "nose_tip_def" 0 "nose_tip_def" 34 }
 		face_detail_temple_def={ "temple_def" 0 "temple_def" 233 }
 		expression_brow_wrinkles={ "brow_wrinkles_04" 0 "brow_wrinkles_02" 74 }
 		expression_eye_wrinkles={ "eye_wrinkles_01" 0 "eye_wrinkles_01" 72 }
 		expression_forehead_wrinkles={ "forehead_wrinkles_01" 0 "forehead_wrinkles_03" 248 }
 		expression_other={ "cheek_wrinkles_both_01" 0 "cheek_wrinkles_both_01" 0 }
 		complexion={ "complexion_7" 255 "complexion_4" 181 }
 		gene_height={ "normal_height" 154 "normal_height" 161 }
 		gene_bs_body_type={ "body_fat_head_fat_low" 92 "body_fat_head_fat_full" 149 }
 		gene_bs_body_shape={ "body_shape_average" 0 "body_shape_pear_full" 0 }
 		gene_bs_bust={ "bust_shape_1_full" 99 "bust_shape_2_full" 77 }
 		gene_age={ "old_beauty_1" 255 "old_4" 182 }
 		gene_eyebrows_shape={ "avg_spacing_high_thickness" 247 "avg_spacing_high_thickness" 235 }
 		gene_eyebrows_fullness={ "layer_2_low_thickness" 127 "layer_2_high_thickness" 178 }
 		gene_body_hair={ "body_hair_dense" 223 "body_hair_dense" 236 }
 		gene_hair_type={ "hair_wavy" 170 "hair_straight" 139 }
 		gene_baldness={ "male_pattern_baldness" 222 "male_pattern_baldness" 117 }
 		eye_accessory={ "normal_eyes" 217 "normal_eyes" 217 }
 		teeth_accessory={ "normal_teeth" 0 "normal_teeth" 0 }
 		eyelashes_accessory={ "no_eyelashes" 127 "normal_eyelashes" 7 }
 		hairstyles={ "mena_hairstyles_wavy" 172 "all_hairstyles" 0 }
 }
	entity={ 0 0 }
}
```
(OutOut Values will depend on the `DnaConfig.js` configuration.)

---

## **🛠️ Technologies Used**
- **HTML5**
- **CSS3 (Dark Medieval Themed)**
- **JavaScript (Clipboard, Text Processing)**

---

## **⚔️ License**
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.

---

🔥 **Now you can easily CK3 characters like a true medieval ruler!** ⚔️  
🚀 **Happy DNA editing!** 🏰🎭