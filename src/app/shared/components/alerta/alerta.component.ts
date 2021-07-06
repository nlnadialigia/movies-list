import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  titulo = 'SUCESSO'
  descricao = 'Registro cadastrado com sucesso'
  btnSucesso = 'OK'
  btnCancelar = 'Cancelar'
  corBtn = 'primary'
  possuiBtnFechar = false


  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data) {
      this.titulo = this.data.titulo || this.titulo
      this.descricao = this.data.descricao || this.descricao
      this.btnSucesso = this.data.btnSucesso || this.btnSucesso
      this.btnCancelar = this.data.btnCancelar || this.btnCancelar
      this.corBtn = this.data.corBtn || this.corBtn
      this.possuiBtnFechar = this.data.possuiBtnFechar || this.possuiBtnFechar
    }
  }

}
