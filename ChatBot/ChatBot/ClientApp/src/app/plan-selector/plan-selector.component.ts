import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss']
})
export class PlanSelectorComponent implements OnInit {
  public plans: string[] = ["SuperShuttle Base Plan", "SuperShuttle PPO 1500"];
  public selectedPlan: string;

  constructor() { }

  ngOnInit() {
  }

  public ppoSelected() {
    return this.selectedPlan === "SuperShuttle Base Plan";
  }
  
  public ppo1500Selected() {
    return this.selectedPlan === "SuperShuttle PPO 1500";
  }
}
