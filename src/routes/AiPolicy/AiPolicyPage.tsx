import PolicyDocument, { PolicySection } from '../../components/PolicyDocument/PolicyDocument';
import Brackets from '../../components/UI/Brackets/Brackets';
import PostCard from '../../components/UI/PostCard/PostCard';
import { CONTACT_EMAIL } from '../../SITE';

const SECTIONS: PolicySection[] = [
  { id: 'note', label: 'A Note' },
  { id: 'pragmatic', label: 'Morality and Pragmatism' },
  { id: 'consent', label: 'Consent', sub: true },
  { id: 'ownership', label: 'Ownership', sub: true },
  { id: 'process', label: 'Reliability', sub: true },
  { id: 'bottom-line', label: 'The Bottom Line' },
  { id: 'policy', label: 'Our Policy' },
  { id: 'in-house', label: 'In-House Projects', sub: true },
  { id: 'client', label: 'Client Projects', sub: true },
  { id: 'questions', label: 'Questions' },
];

/**
 * AI usage policy, in two halves. Above the divider: why we hold the position
 * we do (Dirk's note, then the moral, legal, and practical case). Below it:
 * the policy itself, plainly stated. "Skip to our policy" jumps the gap.
 */
export default function AiPolicyPage() {
  return (
    <PolicyDocument title="AI Usage Policy" updated="2026-10-06" sections={SECTIONS}>
      <p>
        AI tools are in nearly every corner of tech now. If you’re trusting us with your
        project, you have a right to know whether we use them, exactly how, and where we never
        will.
      </p>
      <p>
        The short version: AI is a tool we use to empower ourselves at the individual
        level—but we’re not letting ourselves get carried away. <strong> Creative works
        are best when made by creative people.</strong>
      </p>
      {/* For the skimmers: straight to the punchline. */}
      <p>
        <a className="btn btn--tertiary" href="#policy">
          <Brackets>Skip to our policy ↓</Brackets>
        </a>
      </p>

      {/* Dirk's own voice, set apart from the company stance as an embedded post. */}
      <PostCard
        id="note"
        name="Dirk Hortensius"
        role="Founder & Sr. Engineer @ ToasterCat Studios"
        tag="Personal note"
      >
        <p>
          I hate the term “AI”.
        </p>
        <p>
          There’s nothing particularly intelligent about it. I say that as someone who was building “AI” systems back when we called these statistical average machines Machine Learning [ML] and Natural Language Processing [NLP]. The architectures and mathematics have improved enormously, but today’s Large Language Models [LLMs] are still fundamentally prediction machines: extraordinarily optimized offspring of “Hot dog; Not hot dog” and “next word predictors”—finally fed enough data, GPUs, datacenters, and money to talk back.
        </p>
        <p>
          But damn, is it a useful hot dog machine.
        </p>
        <p>
          I’ve spent more late evenings than I care to remember hunting linker errors, memory leaks, build failures, dependency conflicts, and deployment problems. These issues aren’t necessarily difficult; they’re tedious, inconsistent, and often teach you very little once solved. LLM-based coding assistants are excellent at this work, along with boilerplate code, test cases, dependency upgrades, documentation, and other well-scoped engineering chores. <strong>Let the bots have it</strong>; I’m not becoming a better engineer by discovering an obscured dependency update pulled in a conflicting version of a node library on a specific flavor of a docker environment.
        </p>
        <p>
          The same goes for status reports, emails, and corporate “synergy-ese”. I’m perfectly happy to let a bot turn an engineer’s bullet points into a respectable public statement.
        </p>
        <p>
          The problem of “AI brain rot” starts when the tool stops assisting and starts thinking for you. Let an LLM design an entire codebase and sooner or later you’ll end up making something horrific: a system nobody actually understands; instant legacy software that can only be maintained by inefficiently feeding it back through another model. Vibe-coded apps are impressive until somebody has to change, debug, secure, or operate them six months later. Take it from an AWS DevOps veteran: the engineers responsible for maintaining a system always need to understand it inside and out or you’re going to have a very bad and expensive day.
        </p>
        <p>
          That gives us a fairly simple engineering rule: <strong>use AI for the short game</strong>. Use it to eliminate frustration, investigate bugs, generate boilerplate, summarize information, and accelerate mundane work for a knowledgeable human to evaluate, coach, and approve. Do not outsource architecture, technical ownership, product judgment, or understanding to what is ultimately just an intern-bot.
        </p>
        <p>
          Generative art is a harder sell. As a musician and a certified soul-bearing human, I have yet to see or hear any generative AI output that moves me. That is a meager reward for technology built amid legitimate controversy over the use of artists’ work as training material, often without their knowledge or meaningful consent. And after all of that, the output only really remains most useful for soulless corporate clip art, stock imagery, concepts, and placeholders.
        </p>
        <p>
          What we actually hire artists for is taste, intent, authorship, and a coherent point of view. We hire engineers who can provide novel, out-of-the-box solutions to hard problems and a vision for scale. Those are simply not things a statistical average hot dog machine can provide. No one wants to look at art drawn by a statistical mean or play a game designed by a next word predictor—or at least I certainly don’t.
        </p>
        <p>
          So my policy is not “AI bad” or “AI good”. My policy is to use AI as a simple tool to clear our schedules of mundane bullsh*t. Use it where speed matters more than authorship and where an informed human remains accountable for the result. Do not use it as a substitute for engineering judgment, product design, artistic direction, or creative ownership.
        </p>
        <p>
          AI output isn’t “slop” just because a bot was involved. It’s slop because nobody cared enough to make something good.
        </p>
        {/* Signature, mirroring email sign-off. */}
        <p className="meta post-card-signature">
          Regards;
          <br />
          <br />
          <span aria-hidden="true">{'\\>'}</span> Dirk
          <br />
          <span aria-hidden="true">|-</span> Founder &amp; Sr. Engineer @ ToasterCat Studios
        </p>
      </PostCard>

      {/* The reasoning, before the rules it leads to. */}
      <h2 id="pragmatic">Morality and Pragmatism</h2>
      <p>
        Our position isn’t anti-technology, and it isn’t hype. It rests on three
        things: what’s fair to the people whose work these tools learned from, what you can
        legally own, and what actually holds up once a product ships.
      </p>

      <h3 id="consent">Consent: Art Comes from Artists</h3>
      <p>
        <strong>
          We do not use generative AI to create work derived from other people’s art,
          music, or writing without their consent.
        </strong>
      </p>
      <p>
        Most major image, music, and voice generators were trained on creators’ work—passion
        projects scraped from the internet with neither their permission, knowledge nor consent—
        and several now face lawsuits over it. The US Copyright Office has found that training on
        copyrighted work qualifies as fair use in some cases but not others, and the courts are still
        sorting it all out. We won’t build on that, for ourselves or for clients.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 3: Generative AI Training
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, May 2025 (pre-publication)</span>
          </li>
          <li>
            <a href="https://itsartlaw.org/art-law/artificial-intelligence-and-artists-intellectual-property-unpacking-copyright-infringement-allegations-in-andersen-v-stability-ai-ltd/" target="_blank" rel="noopener noreferrer">
              AI and Artists’ IP: Andersen v. Stability AI
            </a>
            <span className="meta meta-dim">Center for Art Law</span>
          </li>
        </ol>
      </div>

      <h3 id="ownership">Ownership: You Should Own What You Pay For</h3>
      {/* TODO: confirm wording with counsel before launch. */}
      <p>
        US copyright requires a human author. The Copyright Office won’t register material
        generated by AI without meaningful human authorship, and the courts have upheld that.
        Mixed into a larger work, the AI-generated parts have to be disclosed and excluded when
        the work is registered, and they stay unprotected: gaps in what you actually own.
        Keeping generative AI out of creative deliverables is how we make sure the work you pay
        for is yours.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/ai_policy_guidance.pdf" target="_blank" rel="noopener noreferrer">
              Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, March 2023</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 2: Copyrightability
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, January 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/docs/court-of-appeals-decision-affirming-refusal-of-registration.pdf" target="_blank" rel="noopener noreferrer">
              Thaler v. Perlmutter
            </a>
            <span className="meta meta-dim">U.S. Court of Appeals, D.C. Circuit, March 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/docs/zarya-of-the-dawn.pdf" target="_blank" rel="noopener noreferrer">
              Zarya of the Dawn registration decision
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, February 2023</span>
          </li>
        </ol>
      </div>

      <h3 id="process">Reliability: Know Your Own Tools</h3>
      <p>
        Engineers and creators need to own the process at every stage. Used at the ephemeral
        layers (boilerplate code, test cases, bug hunts, Photoshop’s tools, cleaning up 3D
        topology), AI unlocks real productivity without taking away anyone’s vision,
        ownership, or agency.
      </p>
      <p>
        Let an LLM-based coding suite govern an entire project, though, and you get something
        horrifying: a technical behemoth that nobody on the team understands and now has to maintain.
        LLMs are non-deterministic (ask the same question twice, get two different answers), and their
        accuracy measurably degrades as the context they’re given grows, which is exactly what
        happens as a project expands in scope and complexity. This can condemn projects to a fate where every
        future change requires another round through the big expensive machine, running slower and less
        safely each time.
      </p>
      <p>
        We’ve already seen how that ends. An AI agent on Replit wiped a company’s live
        database during a code freeze, then faked records to cover it. Amazon’s own AI
        coding tool reportedly took an AWS service down for 13 hours. Experienced developers
        using AI tools measured 19% slower while believing they were faster. Automation nobody
        understands doesn’t make a product stronger. It makes it fragile.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/" target="_blank" rel="noopener noreferrer">
              Vibe coding service Replit deleted user’s production database
            </a>
            <span className="meta meta-dim">The Register, July 2025</span>
          </li>
          <li>
            <a href="https://www.engadget.com/ai/13-hour-aws-outage-reportedly-caused-by-amazons-own-ai-tools-170930190.html" target="_blank" rel="noopener noreferrer">
              13-hour AWS outage reportedly caused by Amazon’s own AI tools
            </a>
            <span className="meta meta-dim">Engadget, reporting the Financial Times, February 2026</span>
          </li>
          <li>
            <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">
              Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
            </a>
            <span className="meta meta-dim">METR, July 2025</span>
          </li>
          <li>
            <a href="https://www.trychroma.com/research/context-rot" target="_blank" rel="noopener noreferrer">
              Context Rot: How Increasing Input Tokens Impacts LLM Performance
            </a>
            <span className="meta meta-dim">Chroma Research, July 2025</span>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">
              Lost in the Middle: How Language Models Use Long Contexts
            </a>
            <span className="meta meta-dim">Liu et al., Transactions of the ACL, 2024</span>
          </li>
        </ol>
      </div>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        We use the best tools available, where they pay off: faster debugging, broader test
        coverage, and to help us sound like professionals on the internet. We don’t bet our
        products on these tools, nor do we see them as replacements for talented human beings.
      </p>
      <p>
        That keeps what we build maintainable, defensible, and fully yours. You should get what
        you pay for.
      </p>
      <dl className="policy-contrast">
        <div className="policy-contrast-row policy-contrast-row--robot">
          <dt>Need a bug found or something mundane created fast?</dt>
          <dd>
            <p className="policy-contrast-answer">We’ll use a robot.</p>
            <ul>
              <li>Low-level execution of well-defined tasks</li>
              <li>Un-tangling dependency graphs</li>
              <li>Tracing linker errors and build, environment, or platform-level issues</li>
              <li>Tracking security, accessibility, and legal compliance</li>
              <li>Writing soulless &ldquo;corporate synergy-ese&rdquo;</li>
            </ul>
          </dd>
        </div>
        <div className="policy-contrast-row policy-contrast-row--human">
          <dt>Need something extraordinary, creative, or original?</dt>
          <dd>
            <p className="policy-contrast-answer">We’ll put a soul-bearing human on it.</p>
            <ul>
              <li>Finding new solutions to old problems</li>
              <li>High-level technical and product design</li>
              <li>Illustration, animation, music, and sound</li>
              <li>Anything else we’d be proud to call &ldquo;art&rdquo;</li>
            </ul>
          </dd>
        </div>
      </dl>

      {/* THE DIVISION: everything above frames and justifies; everything below
          just states where we stand. "Skip to our policy" lands here. */}
      <hr className="policy-divider" />
      <h2 id="policy" className="policy-division">
        <span className="meta meta-dim policy-division-prompt" aria-hidden="true">
          {'\\>'}
        </span>
        Our Policy
      </h2>
      <p className="policy-division-lede">
        Here’s where we draw the line.
      </p>
      <p>
        Bots get the “short game”. Humans manage them, and build everything else
        that needs soul, originality, or character.
      </p>
      <p>
        This site is a working example. An AI coding assistant helped us refactor, stylize, and extend it,
        but the robot didn’t design it: it extended a structure we’d already hand-built in React,
        following patterns we set years ago and still actively read, change, and maintain ourselves.
      </p>

      <h3 id="in-house">In-House Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="meta policy-rule-label">Do</p>
          <ul>
            <li>Use AI coding assistants to write, review, refactor, and debug code.</li>
            <li>Use them for research, documentation, and talking through technical problems.</li>
            <li>Use them to draft status reports, emails, and other business correspondence.</li>
            <li>Have a person review and test every AI-assisted change before it ships.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="meta policy-rule-label">Don’t</p>
          <ul>
            <li>Generate art, animation, music, sound, or voices for our projects.</li>
            <li>Prompt AI to imitate another creator’s style or work.</li>
            <li>Pass off AI output as hand-made.</li>
          </ul>
        </div>
      </div>

      <h3 id="client">Client Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="meta policy-rule-label">Do</p>
          <ul>
            <li>
              Use AI where it makes your project faster and sturdier: debugging, test coverage,
              and compliance checks.
            </li>
            <li>Tell you up front where AI tools are part of our technical workflow.</li>
            <li>Have an engineer review, test, and take responsibility for every line we deliver.</li>
            <li>Keep AI tools off your project entirely, if you ask.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="meta policy-rule-label">Don’t</p>
          <ul>
            <li>
              Use generative AI for creative deliverables: artwork, animation, music, characters,
              or any other IP you need to own.
            </li>
            <li>
              Put your confidential material (specs, unreleased assets, anything under NDA) into
              AI tools that keep or train on it.
            </li>
            <li>Deliver work whose ownership is in question.</li>
          </ul>
        </div>
      </div>

      <h2 id="questions">Questions</h2>
      <p>
        Want to know how AI was or wasn’t used on something we made? Just ask:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </PolicyDocument>
  );
}
