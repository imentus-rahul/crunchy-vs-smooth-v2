# Cruchy vs Smooth V2

A simple [Solana](https://solana.com/) program to vote for your favorite type of peanut butter. Built with [Anchor](https://project-serum.github.io/anchor/getting-started/introduction.html) and [React](https://reactjs.org/).

This is a follow up to a previous [walkthrough](https://www.brianfriel.xyz/learning-how-to-build-on-solana/) in which I covered the basics of how to write a program on Solana. In this follow up, I refactor my application to make use of [Program Derived Addresses](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses).

Check out the [live version](https://www.pbvote.com/) of this app and its [accompanying walkthrough](https://www.brianfriel.xyz/understanding-program-derived-addresses/).

```
imentus@imentus:~/Documents/im-projects/crunchy-vs-smooth-v2$ solana-keygen new -o program.json
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to program.json
===============================================================================
pubkey: J3HAbtgjPEMs3QhBARjk8FW6uY53qGkcSBexD9AXju6E
===============================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
punch salad logic vacuum almost come popular banner illness habit cloud grocery
===============================================================================
```