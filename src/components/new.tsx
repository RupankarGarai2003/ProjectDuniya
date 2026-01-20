import { Star, Sparkles, Table2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/about-illustration.svg";
import avatar2 from "@/assets/about.jpg";
import avatar3 from "@/assets/blog1.png";
import avatar4 from "@/assets/blog1.png";

const OwnershipCard = () => (
  <div className="bg-card rounded-2xl shadow-card p-4 w-[220px] animate-float">
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-sm font-semibold text-foreground">Ownership</h4>
      <span className="text-xs text-muted-foreground">Equity distribution in your company</span>
    </div>
    <div className="flex gap-3">
      <div className="w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(252 80% 85%)" strokeWidth="20" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(160 84% 39%)"
            strokeWidth="20"
            strokeDasharray="100 155"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(40 95% 55%)"
            strokeWidth="20"
            strokeDasharray="55 200"
            strokeDashoffset="-100"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">Founders</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: "hsl(40 95% 55%)" }} />
          <span className="text-muted-foreground">Investors</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: "hsl(252 80% 85%)" }} />
          <span className="text-muted-foreground">ESOP</span>
        </div>
      </div>
    </div>
  </div>
);

const EquityDataCard = () => (
  <div className="bg-card rounded-2xl shadow-card p-4 w-[200px] animate-float" style={{ animationDelay: "0.5s" }}>
    <div className="space-y-2">
      <div className="flex justify-between items-center py-1 border-b border-border">
        <span className="text-xs text-muted-foreground">12</span>
        <div className="flex-1 mx-2 h-3 bg-accent/30 rounded" />
        <span className="text-xs font-medium">$6,517,000</span>
      </div>
      <div className="flex justify-between items-center py-1 border-b border-border">
        <span className="text-xs text-muted-foreground">A</span>
        <div className="flex-1 mx-2 h-3 bg-primary/40 rounded" style={{ width: "70%" }} />
        <span className="text-xs font-medium">21,973,000</span>
      </div>
      <div className="flex justify-between items-center py-1 border-b border-border">
        <span className="text-xs text-muted-foreground">B</span>
        <div className="flex-1 mx-2 h-3 bg-primary/60 rounded" style={{ width: "50%" }} />
        <span className="text-xs font-medium">$10,000,000</span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="text-xs text-muted-foreground">$0.4551</span>
        <div className="flex gap-2 text-xs">
          <span className="text-primary">Fully Diluted</span>
          <span className="text-muted-foreground">• Undiluted</span>
        </div>
      </div>
    </div>
  </div>
);

const TopStakeholdersCard = () => (
  <div className="bg-card rounded-2xl shadow-card p-4 w-[200px] animate-float-delayed">
    <h4 className="text-sm font-semibold text-foreground mb-3">Top stakeholders</h4>
    <div className="space-y-2">
      {[
        { name: "Founder", percent: 45, img: avatar1 },
        { name: "Investor A", percent: 30, img: avatar2 },
        { name: "Employee", percent: 15, img: avatar4 },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <img src={item.img} alt={item.name} className="w-6 h-6 rounded-full object-cover" />
          <div className="flex-1">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{item.percent}%</span>
        </div>
      ))}
    </div>
  </div>
);

const OptionPoolCard = () => (
  <div className="bg-card rounded-2xl shadow-card p-4 w-[280px] animate-float" style={{ animationDelay: "1s" }}>
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-sm font-semibold text-foreground">Option pool</h4>
      <button className="text-xs text-primary hover:underline">+ Add an offer</button>
    </div>
    <div className="flex items-start gap-3">
      <img src={avatar3} alt="Jane Moore" className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Jane Moore</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Vesting ongoing</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          "Issuing stock options sounds complex so it's good to be able to simplify it. Thanks for a genuinely great product that helps make what we do easier."
        </p>
        <p className="text-xs text-muted-foreground mt-2 italic">— Michael Fox, Co-founder at Fable Food</p>
      </div>
    </div>
  </div>
);

const ActionsCard = () => (
  <div className="bg-card rounded-2xl shadow-card p-3 w-[160px] animate-float-delayed" style={{ animationDelay: "0.3s" }}>
    <div className="space-y-2">
      <button className="w-full text-left text-sm py-1.5 px-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
        New equity plan
      </button>
      <button className="w-full text-left text-sm py-1.5 px-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
        Add shareholder
      </button>
      <button className="w-full text-left text-sm py-1.5 px-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
        Run report
      </button>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:w-[45%] space-y-6 animate-fade-in-up pt-8" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.1]">
              The intuitive equity platform for fast-growing startups
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Automate your equity with Cake's cap table, equity grant templates, raise simulation, and scalable equity platform.
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Offer equity in minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Table2 className="w-4 h-4 text-primary" />
                <span>Keep cap table clean</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Motivate your team</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Button  size="lg">
                Get started free
              </Button>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-foreground rotate-[30deg]" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl text-foreground" style={{ fontFamily: "'Caveat', cursive" }}>
                  no credit card required
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 pt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground tracking-wide">5-STAR RATING</span>
            </div>
          </div>
          
          {/* Right Content - Floating Cards */}
          <div className="relative lg:w-[55%] h-[550px] lg:h-[620px] hidden md:block">
            {/* Ownership Card - Top Right */}
            <div className="absolute -top-4 right-0 z-10">
              <OwnershipCard />
            </div>
            
            {/* Floating avatar near ownership */}
            <div className="absolute top-16 right-[240px] z-20">
              <img 
                src={avatar2} 
                alt="Team member" 
                className="w-14 h-14 rounded-full border-4 border-card shadow-lg animate-float object-cover"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
            
            {/* Equity Data Card - Left side */}
            <div className="absolute top-24 left-0 z-10">
              <EquityDataCard />
            </div>
            
            {/* Actions Card - Center left */}
            <div className="absolute top-44 left-[180px] z-20">
              <ActionsCard />
            </div>
            
            {/* Top Stakeholders Card - Right side */}
            <div className="absolute top-52 right-0 z-10">
              <TopStakeholdersCard />
            </div>
            
            {/* Avatar near stakeholders */}
            <div className="absolute top-48 right-[180px] z-20">
              <img 
                src={avatar4} 
                alt="Team member" 
                className="w-12 h-12 rounded-full border-4 border-card shadow-lg animate-float-delayed object-cover"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            
            {/* Option Pool Card - Bottom */}
            <div className="absolute bottom-0 left-8 z-10">
              <OptionPoolCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
