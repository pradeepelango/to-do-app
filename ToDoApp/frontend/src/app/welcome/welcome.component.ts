import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  message = "Welcome to my ToDo App!";
  name = ''
  welcomeMessageFromService: string;

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params["name"];
  }



  getWelcomeMessage() {
    //console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService
      .executeHelloWorldBeanService()
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
    //console.log('Get Welcome Message')
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService
      .executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response.message);
  }

  handleErrorResponse(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
  }
}
