import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  
  mesAtual: string;
  dataMinima = new Date().toISOString();
  @ViewChild(CalendarComponent, { static: false }) myCalendar: CalendarComponent;

  calendario = {
    dataAtual: new Date(),
    visualizacao: 'month',
    locale: 'pt-BR'
  }

  showAdicionarEvento: boolean;

  novoEvento = {
    titulo: '',
    descricao: '',
    dataInicio: '',
    dataFim: ''
  };
  todosEventos = [
    
  ];

  constructor(
    @Inject(LOCALE_ID) private locale: string,
  ) { }

  ngOnInit() { }

  onViewTitleChanged(title: string) {
    this.mesAtual = title;
  }

  //Mudar a visão do mês
  proximo() {
    this.myCalendar.slideNext();
  }

  anterior() {
    this.myCalendar.slidePrev();
  }

  forma() {
    this.showAdicionarEvento = !this.showAdicionarEvento;
    this.novoEvento = {
      titulo: '',
      descricao: '',
      dataInicio: new Date().toString(),
      dataFim: new Date().toString()
    };
  }

  addEvento() {
    this.todosEventos.push({
      titulo: this.novoEvento.titulo,
      descricao: this.novoEvento.descricao,
      dataInicio:  new Date(this.novoEvento.dataInicio),
      dataFim: new Date(this.novoEvento.dataFim)
    });
    this.forma();
  }

  aoSelecionarData(ev: any) {
    const selecionado = new Date(ev.dataSelecionada);
    this.novoEvento.dataInicio = (selecionado.toString());
    selecionado.setHours(selecionado.getHours() + 1);
    this.novoEvento.dataFim = (selecionado.toString());
  }

}

