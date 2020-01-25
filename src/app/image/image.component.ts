import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc: string = "/assets/img/imagePlaceholder.png";
  selectedImage: any = null;
  isSubmitted: boolean = false;

  formTemplate = new FormGroup({
   // caption: new FormControl('', Validators.required),
    caption: new FormControl(''),
    expenseId: new FormControl(''),
    userId: new FormControl(''),
    imageUrl: new FormControl(''),     
    category: new FormControl('')
  })

  constructor(private storage:AngularFireStorage) { }

  ngOnInit() {
    this.resetForm();
  }

  showImagePreview(event:any) : void{
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.imgSrc = "/assets/img/imagePlaceholder.png";
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      var filePath = `images/${formValue.userId}/${formValue.expenseId}/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imageUrl']=url;
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls(){
    return this.formTemplate['controls'];
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      expenseId: '',
      userId: '',
      imageUrl: '',
      category: 'Travel',
    });
    this.imgSrc = "/assets/img/imagePlaceholder.png";
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
